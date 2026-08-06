import React, { useState } from 'react';
import { StockItem, IndexItem } from '../types';

interface StockDetailModalProps {
  item: StockItem | IndexItem | null;
  onClose: () => void;
  isInWatchlist: boolean;
  onToggleWatchlist: (symbol: string) => void;
}

export const StockDetailModal: React.FC<StockDetailModalProps> = ({
  item,
  onClose,
  isInWatchlist,
  onToggleWatchlist
}) => {
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '1Y' | 'ALL'>('1M');
  const [activeTab, setActiveTab] = useState<'chart' | 'stats' | 'news'>('chart');

  if (!item) return null;

  const symbol = 'symbol' in item ? item.symbol : item.id;
  const name = item.name;
  const isPositive = item.isPositive;
  const price = 'price' in item ? item.price : item.value;
  const changePercent = item.changePercent;

  // Generate dynamic chart path based on timeframe
  const getChartPath = () => {
    if (timeframe === '1D') return 'M 0 50 Q 25 30, 50 45 T 100 20 T 150 35 T 200 15 T 250 25 T 300 10';
    if (timeframe === '1W') return 'M 0 60 Q 30 70, 60 40 T 120 50 T 180 20 T 240 30 T 300 15';
    if (timeframe === '1M') return 'M 0 70 Q 50 30, 100 60 T 200 25 T 300 12';
    if (timeframe === '1Y') return 'M 0 80 Q 75 90, 150 40 T 300 18';
    return 'M 0 90 Q 100 100, 200 50 T 300 22';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white dark:bg-[#191b24] w-full max-w-2xl rounded-2xl border border-[#E0E3EB] dark:border-[#434656] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#E0E3EB] dark:border-[#434656] flex items-start justify-between bg-[#faf8ff] dark:bg-[#191b24]">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[24px] font-bold text-[#191b24] dark:text-[#faf8ff]">{name}</span>
              <span className="bg-[#ededfa] dark:bg-[#2e303a] px-2.5 py-0.5 rounded text-[12px] font-mono font-bold text-[#0049db] dark:text-[#b6c4ff]">
                {symbol}
              </span>
            </div>

            <div className="flex items-baseline gap-3 mt-2">
              <span className="text-[28px] font-mono font-bold text-[#191b24] dark:text-[#faf8ff]">
                {typeof price === 'number' ? `$${price}` : price}
              </span>
              <span
                className={`text-[14px] font-bold flex items-center ${
                  isPositive ? 'text-[#089981]' : 'text-[#F23645]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isPositive ? 'arrow_drop_up' : 'arrow_drop_down'}
                </span>
                {changePercent}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWatchlist(symbol)}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium flex items-center gap-1.5 transition-colors border ${
                isInWatchlist
                  ? 'bg-[#0049db] text-white border-[#0049db]'
                  : 'bg-white text-[#191b24] border-[#E0E3EB] hover:bg-[#F0F3FA]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isInWatchlist ? 'bookmark' : 'bookmark_add'}
              </span>
              <span>{isInWatchlist ? 'Watchlisted' : 'Add Watchlist'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#6A6D78] hover:text-[#191b24] hover:bg-[#F0F3FA] rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="flex items-center justify-between px-6 border-b border-[#E0E3EB] dark:border-[#434656] bg-[#F0F3FA] dark:bg-[#2e303a]">
          <div className="flex gap-4">
            {(['chart', 'stats', 'news'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2.5 text-[12px] font-medium uppercase tracking-wider border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-[#0049db] text-[#0049db] font-bold'
                    : 'border-transparent text-[#6A6D78] hover:text-[#191b24]'
                }`}
              >
                {tab === 'chart' ? 'Interactive Chart' : tab === 'stats' ? 'Key Statistics' : 'News & Intelligence'}
              </button>
            ))}
          </div>

          {/* Timeframe Controls */}
          {activeTab === 'chart' && (
            <div className="flex gap-1 py-1.5">
              {(['1D', '1W', '1M', '1Y', 'ALL'] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    timeframe === tf
                      ? 'bg-[#191b24] text-white font-bold'
                      : 'text-[#6A6D78] hover:bg-[#E0E3EB]'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 max-h-[420px] overflow-y-auto">
          {activeTab === 'chart' && (
            <div>
              {/* Interactive SVG Area Chart */}
              <div className="w-full h-48 bg-[#faf8ff] dark:bg-[#191b24] border border-[#E0E3EB] rounded-xl p-4 relative overflow-hidden flex flex-col justify-between">
                <div className="text-[10px] text-[#6A6D78] font-mono flex justify-between">
                  <span>PRICE ACTION ({timeframe})</span>
                  <span>HIGH PERFORMANCE BENCHMARK</span>
                </div>

                <svg className="w-full h-32 overflow-visible" viewBox="0 0 300 100">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={isPositive ? '#089981' : '#F23645'} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={isPositive ? '#089981' : '#F23645'} stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`${getChartPath()} L 300 100 L 0 100 Z`}
                    fill="url(#chartGradient)"
                  />
                  <path
                    d={getChartPath()}
                    fill="none"
                    stroke={isPositive ? '#089981' : '#F23645'}
                    strokeWidth="2.5"
                  />
                </svg>

                <div className="flex justify-between text-[10px] text-[#6A6D78] font-mono border-t border-[#E0E3EB] pt-1">
                  <span>Open Session</span>
                  <span>Mid Day</span>
                  <span>Market Close</span>
                </div>
              </div>

              {/* Description & Overview */}
              <div className="mt-4 p-4 bg-[#F0F3FA] rounded-xl text-[13px] text-[#434656] leading-relaxed">
                <div className="font-semibold text-[#191b24] mb-1">Company & Asset Summary</div>
                {'description' in item && item.description
                  ? item.description
                  : `${name} (${symbol}) is a premier financial benchmark tracked live on global exchanges with continuous real-time market order flows.`}
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-[#F0F3FA] rounded-lg">
                <div className="text-[10px] text-[#6A6D78] uppercase font-bold">Volume</div>
                <div className="text-[14px] font-mono font-semibold text-[#191b24]">
                  {'volume' in item && item.volume ? item.volume : '42.8M'}
                </div>
              </div>

              <div className="p-3 bg-[#F0F3FA] rounded-lg">
                <div className="text-[10px] text-[#6A6D78] uppercase font-bold">Market Cap / Value</div>
                <div className="text-[14px] font-mono font-semibold text-[#191b24]">
                  {'marketCap' in item && item.marketCap ? item.marketCap : '$1.85T'}
                </div>
              </div>

              <div className="p-3 bg-[#F0F3FA] rounded-lg">
                <div className="text-[10px] text-[#6A6D78] uppercase font-bold">Day Range High</div>
                <div className="text-[14px] font-mono font-semibold text-[#191b24]">
                  {'dayHigh' in item && item.dayHigh ? item.dayHigh : `$${(typeof price === 'number' ? price * 1.02 : 100).toFixed(2)}`}
                </div>
              </div>

              <div className="p-3 bg-[#F0F3FA] rounded-lg">
                <div className="text-[10px] text-[#6A6D78] uppercase font-bold">Day Range Low</div>
                <div className="text-[14px] font-mono font-semibold text-[#191b24]">
                  {'dayLow' in item && item.dayLow ? item.dayLow : `$${(typeof price === 'number' ? price * 0.98 : 95).toFixed(2)}`}
                </div>
              </div>

              <div className="col-span-2 p-3 bg-[#F0F3FA] rounded-lg">
                <div className="text-[10px] text-[#6A6D78] uppercase font-bold mb-1">52-Week Price Spectrum</div>
                <div className="w-full bg-[#E0E3EB] h-2 rounded-full relative overflow-hidden my-1">
                  <div className="bg-[#0049db] h-full rounded-full" style={{ width: '68%' }} />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#6A6D78]">
                  <span>52W Low: {'low52w' in item ? item.low52w : '$85.20'}</span>
                  <span>52W High: {'high52w' in item ? item.high52w : '$220.00'}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="flex flex-col gap-3">
              <div className="p-3 bg-[#F0F3FA] rounded-lg border-l-4 border-[#0049db]">
                <div className="text-[12px] font-semibold text-[#191b24]">
                  {name} reports strong institutional liquidity as trading volumes surge 12%
                </div>
                <div className="text-[10px] text-[#6A6D78] mt-1">MarketWise News Wire • 25 mins ago</div>
              </div>

              <div className="p-3 bg-[#F0F3FA] rounded-lg border-l-4 border-[#089981]">
                <div className="text-[12px] font-semibold text-[#191b24]">
                  Analysts revise price target upwards following macroeconomic interest rate signals
                </div>
                <div className="text-[10px] text-[#6A6D78] mt-1">Financial Times Analysis • 2 hours ago</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-[#E0E3EB] bg-[#faf8ff] flex justify-between items-center text-[12px]">
          <span className="text-[#6A6D78] flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#089981] animate-pulse" />
            Live Market Data Stream Active
          </span>
          <button
            onClick={onClose}
            className="bg-[#191b24] text-white px-5 py-1.5 rounded-full font-medium hover:bg-[#2e303a]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
