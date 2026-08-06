import React from 'react';
import { MarketCategory } from '../types';

interface CategoryNavProps {
  activeCategory: MarketCategory;
  onSelectCategory: (category: MarketCategory) => void;
}

const CATEGORIES: MarketCategory[] = [
  'US stocks',
  'World stocks',
  'Crypto',
  'Futures',
  'Forex',
  'Government bonds',
  'Corporate bonds',
  'ETFs',
  'Economy'
];

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        {/* Active Section Title */}
        <div className="flex items-center gap-1 cursor-pointer group" onClick={() => onSelectCategory('US stocks')}>
          <h2 className="text-[28px] font-semibold text-[#191b24]">
            {activeCategory === 'US stocks' ? 'Indices' : activeCategory}
          </h2>
          <span className="material-symbols-outlined text-[20px] text-[#434656] mt-1 group-hover:translate-x-1 transition-transform">
            chevron_right
          </span>
        </div>

        {/* Capsule Navigation */}
        <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
          <nav className="flex items-center p-1 bg-[#ededfa] rounded-full border border-[#E0E3EB] whitespace-nowrap">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-colors ${
                    isActive
                      ? 'bg-[#191b24] text-[#faf8ff] font-semibold shadow-xs'
                      : 'text-[#191b24] hover:bg-[#F0F3FA]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};
