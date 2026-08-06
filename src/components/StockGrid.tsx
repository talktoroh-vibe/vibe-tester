import React from 'react';
import { StockItem, MarketCategory } from '../types';

interface StockGridProps {
  category: MarketCategory;
  stocks: StockItem[];
  onSelectStock: (stock: StockItem) => void;
  onSeeAll: () => void;
}

export const StockGrid: React.FC<StockGridProps> = ({
  category,
  stocks,
  onSelectStock,
  onSeeAll
}) => {
  return (
    <section>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 border-b border-[#E0E3EB] pb-2">
        <h3 className="text-[20px] font-semibold text-[#191b24] flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0049db] text-[20px]">
            {category === 'US stocks'
              ? 'flag'
              : category === 'World stocks'
              ? 'public'
              : category === 'Crypto'
              ? 'currency_bitcoin'
              : category === 'Futures'
              ? 'trending_up'
              : category === 'Forex'
              ? 'currency_exchange'
              : category === 'Government bonds' || category === 'Corporate bonds'
              ? 'account_balance'
              : category === 'ETFs'
              ? 'pie_chart'
              : 'monitoring'}
          </span>
          <span>{category}</span>
        </h3>
        <button
          onClick={onSeeAll}
          className="text-[12px] font-medium text-[#0049db] hover:underline flex items-center gap-1"
        >
          <span>See all</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>

      {/* Grid of 6 stock cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            onClick={() => onSelectStock(stock)}
            className="p-3 border border-[#E0E3EB] rounded-lg bg-white hover:bg-[#F0F3FA] cursor-pointer transition-all hover:border-[#c3c5d8] shadow-2xs"
          >
            <div className="text-[12px] font-medium text-[#191b24] mb-1 truncate">
              {stock.name} <span className="text-[#6A6D78] text-[10px]">({stock.symbol})</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-[14px] font-mono font-medium text-[#191b24]">
                {typeof stock.price === 'number'
                  ? stock.price >= 1000
                    ? stock.price.toLocaleString('en-US', { minimumFractionDigits: 2 })
                    : stock.price.toFixed(stock.price < 10 ? 4 : 2)
                  : stock.price}
              </span>
              <span
                className={`text-[11px] font-bold tracking-wider ${
                  stock.isPositive ? 'text-[#089981]' : 'text-[#F23645]'
                }`}
              >
                {stock.isPositive ? '+' : ''}
                {stock.changePercent}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
