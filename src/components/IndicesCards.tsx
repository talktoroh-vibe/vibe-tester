import React from 'react';
import { IndexItem } from '../types';

interface IndicesCardsProps {
  indices: IndexItem[];
  onSelectIndex: (index: IndexItem) => void;
}

export const IndicesCards: React.FC<IndicesCardsProps> = ({ indices, onSelectIndex }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      {indices.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => onSelectIndex(item)}
            className="flex items-center p-4 bg-[#F0F3FA] rounded-xl border border-[#E0E3EB] hover:border-[#c3c5d8] hover:bg-white transition-all cursor-pointer group shadow-2xs"
          >
            {/* Circular Badge */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[12px] text-white mr-4 shrink-0 shadow-xs"
              style={{ backgroundColor: item.badgeBgColor }}
            >
              {item.badge}
            </div>

            {/* Title & Value */}
            <div className="flex-grow">
              <div className="text-[14px] font-medium text-[#191b24] group-hover:text-[#0049db] transition-colors">
                {item.name}
              </div>
              <div className="text-[12px] text-[#6A6D78] flex items-center gap-2 mt-0.5">
                <span className="font-mono font-medium text-[#191b24]">{item.value}</span>
                <span
                  className={`flex items-center text-[11px] font-semibold ${
                    item.isPositive ? 'text-[#089981]' : 'text-[#F23645]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {item.isPositive ? 'arrow_drop_up' : 'arrow_drop_down'}
                  </span>
                  {item.changePercent}
                </span>
              </div>
            </div>

            {/* Sparkline SVG Graph */}
            <div className="w-16 h-8 opacity-60 group-hover:opacity-100 transition-opacity">
              <svg
                className={`w-full h-full fill-none stroke-[2] ${
                  item.isPositive ? 'stroke-[#089981]' : 'stroke-[#F23645]'
                }`}
                viewBox="0 0 100 30"
              >
                <path d={item.sparklinePoints} />
              </svg>
            </div>
          </div>
        );
      })}
    </section>
  );
};
