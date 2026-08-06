import React, { useState } from 'react';

interface HeroSectionProps {
  onSelectPerspective: (perspective: string) => void;
  currentPerspective: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectPerspective,
  currentPerspective
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const perspectives = [
    'Markets, everywhere',
    'Americas Session Overview',
    'Europe & Asia-Pacific Markets',
    'Crypto & Digital Asset Flow',
    'Commodities & Energy Radar'
  ];

  return (
    <section className="text-center mb-10 relative">
      <div className="inline-block relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[32px] md:text-[40px] font-bold text-[#191b24] tracking-tight flex items-center justify-center gap-2 hover:opacity-80 transition-opacity focus:outline-none"
        >
          <span>{currentPerspective}</span>
          <span className={`material-symbols-outlined text-[32px] md:text-[40px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            keyboard_arrow_down
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-[#E0E3EB] rounded-xl shadow-xl z-30 py-2 text-left">
            <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#6A6D78] uppercase border-b border-[#E0E3EB]">
              Select Market View
            </div>
            {perspectives.map((p) => (
              <button
                key={p}
                onClick={() => {
                  onSelectPerspective(p);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-[14px] font-medium transition-colors flex items-center justify-between ${
                  currentPerspective === p
                    ? 'bg-[#f3f2ff] text-[#0049db] font-semibold'
                    : 'text-[#191b24] hover:bg-[#F0F3FA]'
                }`}
              >
                <span>{p}</span>
                {currentPerspective === p && (
                  <span className="material-symbols-outlined text-[18px]">check</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      <p className="text-[#6A6D78] text-[13px] mt-1">
        Real-time financial benchmarks, indices, price action, and macroeconomic indicators.
      </p>
    </section>
  );
};
