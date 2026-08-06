import React from 'react';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-[#ededfa] dark:bg-[#191b24] border-t border-[#E0E3EB] dark:border-[#434656] mt-auto w-full">
      <div className="w-full py-12 px-4 md:px-8 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <a
            onClick={() => onNavClick('markets')}
            className="text-[20px] font-bold text-[#191b24] dark:text-[#faf8ff] flex items-center gap-2 cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-[#0049db]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              analytics
            </span>
            <span>MarketWise</span>
          </a>
          <p className="text-[12px] text-[#606471] dark:text-[#c3c6d5] leading-relaxed">
            © 2024 MarketWise, Inc. High-performance data for professional traders.
          </p>
        </div>

        <div className="col-span-1 md:col-span-3 flex flex-wrap gap-x-12 gap-y-4 justify-start md:justify-end items-center">
          {[
            'Products',
            'Community',
            'Markets',
            'News',
            'Brokers',
            'About',
            'Contact'
          ].map((link) => (
            <button
              key={link}
              onClick={() => onNavClick(link.toLowerCase())}
              className={`text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-[#0049db] ${
                link === 'Markets'
                  ? 'text-[#0049db] dark:text-[#b6c4ff]'
                  : 'text-[#606471] dark:text-[#c3c6d5]'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
