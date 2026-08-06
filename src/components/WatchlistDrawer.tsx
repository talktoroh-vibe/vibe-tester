import React from 'react';
import { StockItem } from '../types';

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  watchlistSymbols: string[];
  allStocks: StockItem[];
  onSelectStock: (stock: StockItem) => void;
  onRemoveFromWatchlist: (symbol: string) => void;
}

export const WatchlistDrawer: React.FC<WatchlistDrawerProps> = ({
  isOpen,
  onClose,
  watchlistSymbols,
  allStocks,
  onSelectStock,
  onRemoveFromWatchlist
}) => {
  if (!isOpen) return null;

  const savedStocks = allStocks.filter((s) => watchlistSymbols.includes(s.symbol));

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end">
      <div
        className="bg-white dark:bg-[#191b24] w-full max-w-md h-full shadow-2xl border-l border-[#E0E3EB] flex flex-col animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-[#E0E3EB] flex items-center justify-between bg-[#faf8ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0049db]">bookmark</span>
            <h3 className="text-[16px] font-bold text-[#191b24]">Saved Watchlist</h3>
            <span className="bg-[#0049db] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {watchlistSymbols.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#6A6D78] hover:text-[#191b24] rounded-full"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4">
          {savedStocks.length === 0 ? (
            <div className="text-center py-16 text-[#6A6D78] text-[13px]">
              <span className="material-symbols-outlined text-[40px] text-[#c3c5d8] block mb-2">
                bookmark_border
              </span>
              No instruments in your watchlist yet. Click on any stock or index card to save it here for fast monitoring!
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {savedStocks.map((stock) => (
                <div
                  key={stock.symbol}
                  className="p-3 bg-[#F0F3FA] rounded-xl border border-[#E0E3EB] flex items-center justify-between hover:bg-white transition-colors group cursor-pointer"
                  onClick={() => onSelectStock(stock)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-[11px] text-[#191b24] border border-[#E0E3EB]">
                      {stock.symbol.slice(0, 3)}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[#191b24]">
                        {stock.name} <span className="text-[11px] text-[#6A6D78]">({stock.symbol})</span>
                      </div>
                      <div className="text-[10px] text-[#6A6D78]">{stock.category}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-[13px] font-mono font-bold text-[#191b24]">
                        ${stock.price}
                      </div>
                      <div
                        className={`text-[10px] font-bold ${
                          stock.isPositive ? 'text-[#089981]' : 'text-[#F23645]'
                        }`}
                      >
                        {stock.isPositive ? '+' : ''}{stock.changePercent}%
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveFromWatchlist(stock.symbol);
                      }}
                      className="text-[#6A6D78] hover:text-[#F23645] p-1 rounded transition-colors"
                      title="Remove from Watchlist"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E0E3EB] bg-[#faf8ff] text-center">
          <button
            onClick={onClose}
            className="w-full bg-[#0049db] text-white py-2 rounded-full text-[13px] font-medium hover:bg-[#003ab3] transition-colors"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
