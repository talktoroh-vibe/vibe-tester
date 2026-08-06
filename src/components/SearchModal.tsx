import React, { useState, useEffect } from 'react';
import { StockItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  allStocks: StockItem[];
  onSelectStock: (stock: StockItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  allStocks,
  onSelectStock
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? allStocks.slice(0, 8)
    : allStocks.filter(
        (s) =>
          s.symbol.toLowerCase().includes(query.toLowerCase()) ||
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
      <div
        className="bg-white dark:bg-[#191b24] w-full max-w-xl rounded-xl border border-[#E0E3EB] dark:border-[#434656] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Header */}
        <div className="flex items-center px-4 py-3 border-b border-[#E0E3EB] dark:border-[#434656]">
          <span className="material-symbols-outlined text-[#6A6D78] mr-3">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search symbols, company names, or markets (e.g. NVDA, Bitcoin, S&P 500)..."
            className="w-full bg-transparent text-[14px] text-[#191b24] dark:text-[#faf8ff] focus:outline-none placeholder:text-[#6A6D78]"
          />
          <button
            onClick={onClose}
            className="text-[11px] font-mono text-[#6A6D78] bg-[#F0F3FA] dark:bg-[#2e303a] px-2 py-1 rounded hover:text-[#191b24]"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#6A6D78]">
            {query.trim() === '' ? 'Popular Market Instruments' : `Search Results (${filtered.length})`}
          </div>

          {filtered.length === 0 ? (
            <div className="p-8 text-center text-[13px] text-[#6A6D78]">
              No instruments match "{query}". Try searching NVDA, Apple, Crypto, or Gold.
            </div>
          ) : (
            filtered.map((stock) => (
              <button
                key={stock.symbol}
                onClick={() => {
                  onSelectStock(stock);
                  onClose();
                }}
                className="w-full text-left p-2.5 rounded-lg hover:bg-[#F0F3FA] dark:hover:bg-[#2e303a] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#f3f2ff] dark:bg-[#2e303a] rounded-lg flex items-center justify-center font-bold text-[12px] text-[#0049db] dark:text-[#b6c4ff]">
                    {stock.symbol.slice(0, 3)}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#191b24] dark:text-[#faf8ff] group-hover:text-[#0049db]">
                      {stock.name} <span className="text-[11px] font-normal text-[#6A6D78]">({stock.symbol})</span>
                    </div>
                    <div className="text-[10px] text-[#6A6D78]">
                      {stock.category}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-mono font-medium text-[#191b24] dark:text-[#faf8ff]">
                    {typeof stock.price === 'number' ? `$${stock.price}` : stock.price}
                  </div>
                  <div
                    className={`text-[10px] font-bold ${
                      stock.isPositive ? 'text-[#089981]' : 'text-[#F23645]'
                    }`}
                  >
                    {stock.isPositive ? '+' : ''}{stock.changePercent}%
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
