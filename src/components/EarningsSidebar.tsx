import React, { useState } from 'react';
import { EarningsEvent, IpoEvent } from '../types';

interface EarningsSidebarProps {
  earnings: EarningsEvent[];
  ipos: IpoEvent[];
  onSelectStock: (symbol: string) => void;
  onOpenAllEarnings: () => void;
  onOpenAllIpos: () => void;
}

export const EarningsSidebar: React.FC<EarningsSidebarProps> = ({
  earnings,
  ipos,
  onSelectStock,
  onOpenAllEarnings,
  onOpenAllIpos
}) => {
  const [showUpcomingIpos, setShowUpcomingIpos] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Earnings Calendar Card */}
      <div className="bg-[#f3f2ff] border border-[#E0E3EB] rounded-xl p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[20px] font-semibold text-[#191b24] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0049db] text-[20px]">
              event
            </span>
            <span>Earnings</span>
          </h3>
          <button
            onClick={onOpenAllEarnings}
            className="text-[12px] text-[#0049db] hover:underline font-medium"
          >
            All events
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {earnings.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectStock(item.symbol)}
              className="flex items-center justify-between p-2 hover:bg-white transition-colors rounded-lg cursor-pointer border border-transparent hover:border-[#E0E3EB]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#e1e1ee] rounded flex items-center justify-center text-[10px] font-bold text-[#191b24] shrink-0">
                  {item.symbol}
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#191b24]">{item.name}</span>
                  <span className="text-[10px] text-[#6A6D78]">{item.date}</span>
                </div>
              </div>
              <div className="text-right flex flex-col">
                <span className="text-[12px] font-mono text-[#191b24] font-medium">{item.actual}</span>
                <span className="text-[10px] font-mono text-[#6A6D78]">{item.estimated}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IPO Calendar Card */}
      <div className="bg-[#f3f2ff] border border-[#E0E3EB] rounded-xl p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[20px] font-semibold text-[#191b24] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0049db] text-[20px]">
              rocket_launch
            </span>
            <span>IPOs</span>
          </h3>
          <button
            onClick={() => {
              setShowUpcomingIpos(!showUpcomingIpos);
              onOpenAllIpos();
            }}
            className="text-[12px] text-[#0049db] hover:underline font-medium"
          >
            All events
          </button>
        </div>

        {!showUpcomingIpos ? (
          <div className="text-[12px] text-[#6A6D78] text-center py-6 flex flex-col items-center gap-2">
            <span>No major IPOs scheduled for today.</span>
            <button
              onClick={() => setShowUpcomingIpos(true)}
              className="text-[11px] text-[#0049db] font-medium hover:underline bg-white px-3 py-1 rounded-full border border-[#E0E3EB]"
            >
              View Upcoming IPOs
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {ipos.map((ipo) => (
              <div
                key={ipo.id}
                onClick={() => onSelectStock(ipo.symbol)}
                className="flex items-center justify-between p-2 bg-white rounded-lg border border-[#E0E3EB] hover:border-[#0049db] cursor-pointer transition-colors"
              >
                <div>
                  <div className="text-[12px] font-semibold text-[#191b24]">{ipo.name} ({ipo.symbol})</div>
                  <div className="text-[10px] text-[#6A6D78]">Exp: {ipo.expectedDate} • {ipo.exchange}</div>
                </div>
                <div className="text-[11px] font-mono text-[#0049db] font-medium">
                  {ipo.priceRange}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
