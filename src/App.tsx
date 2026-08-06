/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryNav } from './components/CategoryNav';
import { IndicesCards } from './components/IndicesCards';
import { StockGrid } from './components/StockGrid';
import { MarketTables } from './components/MarketTables';
import { EarningsSidebar } from './components/EarningsSidebar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { StockDetailModal } from './components/StockDetailModal';
import { WatchlistDrawer } from './components/WatchlistDrawer';
import { FullTableModal } from './components/FullTableModal';
import { GetStartedModal } from './components/GetStartedModal';

import {
  MAJOR_INDICES,
  CATEGORY_STOCKS,
  HIGHEST_VOLUME_STOCKS,
  MOST_VOLATILE_STOCKS,
  EARNINGS_EVENTS,
  IPO_EVENTS
} from './data/marketData';

import { StockItem, IndexItem, MarketCategory } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<MarketCategory>('US stocks');
  const [currentPerspective, setCurrentPerspective] = useState('Markets, everywhere');
  const [activeNav, setActiveNav] = useState('markets');

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StockItem | IndexItem | null>(null);

  // Full table modal state
  const [modalType, setModalType] = useState<'volume' | 'volatile' | 'earnings' | 'ipos' | null>(null);

  // Watchlist persistence
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('marketwise_watchlist');
      return saved ? JSON.parse(saved) : ['NVDA', 'AAPL', 'BTC/USD'];
    } catch {
      return ['NVDA', 'AAPL', 'BTC/USD'];
    }
  });

  // Mutable stocks data for live tick simulation
  const [allCategoryStocks, setAllCategoryStocks] = useState(CATEGORY_STOCKS);

  useEffect(() => {
    localStorage.setItem('marketwise_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  // Subtle real-time price tick simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setAllCategoryStocks((prev) => {
        const next = { ...prev };
        const categories = Object.keys(next) as MarketCategory[];
        const randomCat = categories[Math.floor(Math.random() * categories.length)];
        const stocks = [...next[randomCat]];
        if (stocks.length > 0) {
          const randomIndex = Math.floor(Math.random() * stocks.length);
          const stock = { ...stocks[randomIndex] };
          const deltaPercent = (Math.random() - 0.49) * 0.4;
          if (typeof stock.price === 'number') {
            const newPrice = Math.max(0.01, stock.price * (1 + deltaPercent / 100));
            stock.price = Number(newPrice.toFixed(stock.price < 10 ? 4 : 2));
            stock.changePercent = Number((stock.changePercent + deltaPercent / 5).toFixed(2));
            stock.isPositive = stock.changePercent >= 0;
            stocks[randomIndex] = stock;
            next[randomCat] = stocks;
          }
        }
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleWatchlist = (symbol: string) => {
    setWatchlist((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  };

  // Flatten all stocks for searching
  const flattenedStocks: StockItem[] = (Object.values(allCategoryStocks) as StockItem[][]).flat();

  const handleSelectStockBySymbol = (symbol: string) => {
    const found = flattenedStocks.find((s) => s.symbol === symbol);
    if (found) {
      setSelectedItem(found);
    } else {
      const indexFound = MAJOR_INDICES.find((i) => i.id === symbol || i.name.toLowerCase().includes(symbol.toLowerCase()));
      if (indexFound) setSelectedItem(indexFound);
    }
  };

  return (
    <div className="bg-[#faf8ff] text-[#191b24] font-['IBM_Plex_Sans'] antialiased min-h-screen flex flex-col selection:bg-[#0049db] selection:text-white">
      {/* Top Header Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        watchlistCount={watchlist.length}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        onOpenGetStarted={() => setIsGetStartedOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Hero Headline */}
        <HeroSection
          currentPerspective={currentPerspective}
          onSelectPerspective={(p) => setCurrentPerspective(p)}
        />

        {/* Category Capsule Navigation */}
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />

        {/* Major Indices Cards */}
        <IndicesCards
          indices={MAJOR_INDICES}
          onSelectIndex={(index) => setSelectedItem(index)}
        />

        {/* Bento Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main 8-Column Area */}
          <div className="md:col-span-8 flex flex-col gap-10">
            {/* Active Market Category Stocks Grid */}
            <StockGrid
              category={activeCategory}
              stocks={allCategoryStocks[activeCategory] || []}
              onSelectStock={(stock) => setSelectedItem(stock)}
              onSeeAll={() => {
                const stock = allCategoryStocks[activeCategory]?.[0];
                if (stock) setSelectedItem(stock);
              }}
            />

            {/* Highest Volume & Most Volatile Tables */}
            <MarketTables
              highestVolume={HIGHEST_VOLUME_STOCKS}
              mostVolatile={MOST_VOLATILE_STOCKS}
              onSelectTableStock={handleSelectStockBySymbol}
              onOpenVolumeModal={() => setModalType('volume')}
              onOpenVolatileModal={() => setModalType('volatile')}
            />
          </div>

          {/* Right 4-Column Calendar Sidebar */}
          <div className="md:col-span-4">
            <EarningsSidebar
              earnings={EARNINGS_EVENTS}
              ipos={IPO_EVENTS}
              onSelectStock={handleSelectStockBySymbol}
              onOpenAllEarnings={() => setModalType('earnings')}
              onOpenAllIpos={() => setModalType('ipos')}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onNavClick={(tab) => setActiveNav(tab)} />

      {/* Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        allStocks={flattenedStocks}
        onSelectStock={(stock) => setSelectedItem(stock)}
      />

      <StockDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        isInWatchlist={selectedItem ? watchlist.includes('symbol' in selectedItem ? selectedItem.symbol : selectedItem.id) : false}
        onToggleWatchlist={toggleWatchlist}
      />

      <WatchlistDrawer
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        watchlistSymbols={watchlist}
        allStocks={flattenedStocks}
        onSelectStock={(stock) => {
          setIsWatchlistOpen(false);
          setSelectedItem(stock);
        }}
        onRemoveFromWatchlist={toggleWatchlist}
      />

      <FullTableModal
        isOpen={modalType !== null}
        type={modalType || 'volume'}
        title={
          modalType === 'volume'
            ? 'Highest Volume Market Movers'
            : modalType === 'volatile'
            ? 'Most Volatile Intraday Assets'
            : modalType === 'earnings'
            ? 'Corporate Earnings Calendar'
            : 'Upcoming IPO Calendar'
        }
        onClose={() => setModalType(null)}
        volumeData={HIGHEST_VOLUME_STOCKS}
        volatileData={MOST_VOLATILE_STOCKS}
        earningsData={EARNINGS_EVENTS}
        iposData={IPO_EVENTS}
        onSelectStock={handleSelectStockBySymbol}
      />

      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />
    </div>
  );
}
