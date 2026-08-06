import React, { useState } from 'react';
import { NavTab } from '../types';

interface NavbarProps {
  onOpenSearch: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  watchlistCount: number;
  onOpenWatchlist: () => void;
  onOpenGetStarted: () => void;
}

const NAV_TABS: NavTab[] = [
  { id: 'products', label: 'Products', href: '#' },
  { id: 'community', label: 'Community', href: '#' },
  { id: 'markets', label: 'Markets', href: '#' },
  { id: 'brokers', label: 'Brokers', href: '#' },
  { id: 'more', label: 'More', href: '#' }
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  activeNav,
  setActiveNav,
  watchlistCount,
  onOpenWatchlist,
  onOpenGetStarted
}) => {
  const [lang, setLang] = useState('EN');
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <header className="bg-[#faf8ff] dark:bg-[#191b24] w-full z-40 sticky top-0 flex justify-between items-center px-4 md:px-8 h-16 border-b border-[#E0E3EB] dark:border-[#434656]">
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setActiveNav('markets')}
          className="text-[20px] font-bold text-[#191b24] dark:text-[#faf8ff] flex items-center gap-2 text-left focus:outline-none"
        >
          <span className="material-symbols-outlined text-[#0049db]" style={{ fontVariationSettings: "'FILL' 1" }}>
            analytics
          </span>
          <span>MarketWise</span>
        </button>

        {/* Search Input Trigger */}
        <div className="hidden md:flex items-center relative">
          <button
            onClick={onOpenSearch}
            className="w-64 pl-10 pr-4 py-1.5 bg-[#F0F3FA] hover:bg-[#ededfa] rounded-full text-left text-[12px] text-[#434656] flex items-center justify-between border border-transparent focus:border-[#0049db] transition-colors"
          >
            <span className="material-symbols-outlined absolute left-3 text-[#434656] text-[18px]">
              search
            </span>
            <span className="ml-2">Search (Ctrl+K)</span>
            <kbd className="hidden lg:inline-block bg-[#faf8ff] px-1.5 py-0.5 rounded text-[10px] font-mono border border-[#E0E3EB] text-[#6A6D78]">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <nav className="hidden md:flex items-center gap-6 h-full">
        {NAV_TABS.map((tab) => {
          const isActive = activeNav === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveNav(tab.id)}
              className={`h-full flex items-center transition-colors px-2 text-[14px] font-medium border-b-2 ${
                isActive
                  ? 'text-[#0049db] dark:text-[#b6c4ff] border-[#0049db] dark:border-[#b6c4ff] font-semibold'
                  : 'text-[#434656] dark:text-[#e1e1ee] border-transparent hover:text-[#191b24] hover:bg-[#F0F3FA] dark:hover:bg-[#2e303a] rounded-t'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Action Controls */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Watchlist Quick Button */}
        <button
          onClick={onOpenWatchlist}
          className="relative p-2 text-[#434656] hover:text-[#191b24] hover:bg-[#F0F3FA] rounded-full transition-colors flex items-center justify-center"
          title="View Saved Watchlist"
        >
          <span className="material-symbols-outlined text-[20px]">bookmark</span>
          {watchlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#0049db] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {watchlistCount}
            </span>
          )}
        </button>

        {/* Search Mobile Icon */}
        <button
          onClick={onOpenSearch}
          className="md:hidden p-2 text-[#434656] hover:text-[#191b24] rounded-full"
        >
          <span className="material-symbols-outlined text-[20px]">search</span>
        </button>

        {/* Language dropdown */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-1 text-[#434656] hover:text-[#191b24] text-[12px] transition-colors p-1 rounded"
          >
            <span className="material-symbols-outlined text-[18px]">language</span>
            <span>{lang}</span>
          </button>
          {showLangMenu && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-[#E0E3EB] rounded-lg shadow-lg py-1 z-50">
              {['EN', 'ES', 'DE', 'FR', 'JA'].map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setShowLangMenu(false);
                  }}
                  className="w-full text-left px-3 py-1.5 text-[12px] hover:bg-[#F0F3FA] text-[#191b24]"
                >
                  {l === 'EN' ? 'English (EN)' : l === 'ES' ? 'Español (ES)' : l === 'DE' ? 'Deutsch (DE)' : l === 'FR' ? 'Français (FR)' : '日本語 (JA)'}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* User profile button */}
        <button 
          onClick={onOpenGetStarted}
          className="text-[#434656] hover:text-[#191b24] transition-colors p-1"
          title="Account profile"
        >
          <span className="material-symbols-outlined text-[24px]">person</span>
        </button>

        {/* Get started button */}
        <button
          onClick={onOpenGetStarted}
          className="bg-[#0049db] hover:bg-[#003ab3] text-white px-4 py-1.5 rounded-full text-[12px] font-medium transition-all active:scale-95 shadow-xs"
        >
          Get started
        </button>
      </div>
    </header>
  );
};
