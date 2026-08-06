import React from 'react';
import { TableStock, EarningsEvent, IpoEvent } from '../types';

interface FullTableModalProps {
  title: string;
  type: 'volume' | 'volatile' | 'earnings' | 'ipos';
  isOpen: boolean;
  onClose: () => void;
  volumeData?: TableStock[];
  volatileData?: TableStock[];
  earningsData?: EarningsEvent[];
  iposData?: IpoEvent[];
  onSelectStock: (symbol: string) => void;
}

export const FullTableModal: React.FC<FullTableModalProps> = ({
  title,
  type,
  isOpen,
  onClose,
  volumeData = [],
  volatileData = [],
  earningsData = [],
  iposData = [],
  onSelectStock
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white dark:bg-[#191b24] w-full max-w-3xl rounded-2xl border border-[#E0E3EB] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 px-6 border-b border-[#E0E3EB] flex justify-between items-center bg-[#faf8ff]">
          <h3 className="text-[18px] font-bold text-[#191b24] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0049db]">table_view</span>
            <span>{title}</span>
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-[#6A6D78] hover:text-[#191b24] rounded-full"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-6 max-h-[480px] overflow-y-auto">
          {type === 'volume' && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E0E3EB] text-[11px] font-bold text-[#6A6D78] uppercase tracking-wider">
                  <th className="py-2.5">Symbol & Name</th>
                  <th className="py-2.5 text-right">Price</th>
                  <th className="py-2.5 text-right">Volume</th>
                  <th className="py-2.5 text-right">Change</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                {volumeData.map((item) => (
                  <tr
                    key={item.symbol}
                    onClick={() => {
                      onSelectStock(item.symbol);
                      onClose();
                    }}
                    className="border-b border-[#e1e1ee] hover:bg-[#F0F3FA] cursor-pointer transition-colors"
                  >
                    <td className="py-3 font-semibold text-[#191b24]">
                      {item.symbol} <span className="text-[11px] font-normal text-[#6A6D78]">({item.name})</span>
                    </td>
                    <td className="py-3 text-right font-mono font-medium">${item.price}</td>
                    <td className="py-3 text-right font-mono text-[#6A6D78]">{item.volume || '35.4M'}</td>
                    <td
                      className={`py-3 text-right font-mono font-bold ${
                        item.isPositive ? 'text-[#089981]' : 'text-[#F23645]'
                      }`}
                    >
                      {item.changePercent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {type === 'volatile' && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E0E3EB] text-[11px] font-bold text-[#6A6D78] uppercase tracking-wider">
                  <th className="py-2.5">Symbol & Company</th>
                  <th className="py-2.5 text-right">Price</th>
                  <th className="py-2.5 text-right">Volatile Shift</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                {volatileData.map((item) => (
                  <tr
                    key={item.symbol}
                    onClick={() => {
                      onSelectStock(item.symbol);
                      onClose();
                    }}
                    className="border-b border-[#e1e1ee] hover:bg-[#F0F3FA] cursor-pointer transition-colors"
                  >
                    <td className="py-3 font-semibold text-[#191b24]">
                      {item.symbol} <span className="text-[11px] font-normal text-[#6A6D78]">({item.name})</span>
                    </td>
                    <td className="py-3 text-right font-mono font-medium">${item.price}</td>
                    <td
                      className={`py-3 text-right font-mono font-bold ${
                        item.isPositive ? 'text-[#089981]' : 'text-[#F23645]'
                      }`}
                    >
                      {item.changePercent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {type === 'earnings' && (
            <div className="flex flex-col gap-3">
              {earningsData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectStock(item.symbol);
                    onClose();
                  }}
                  className="p-3 bg-[#F0F3FA] rounded-xl flex items-center justify-between hover:bg-[#ededfa] cursor-pointer transition-colors border border-[#E0E3EB]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0049db] text-white rounded-lg flex items-center justify-center font-bold text-[12px]">
                      {item.symbol}
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#191b24]">{item.name}</div>
                      <div className="text-[11px] text-[#6A6D78]">
                        Report Date: {item.date} • {item.category}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-mono font-bold text-[#089981]">
                      {item.actual}
                    </div>
                    <div className="text-[11px] font-mono text-[#6A6D78]">
                      {item.estimated}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === 'ipos' && (
            <div className="flex flex-col gap-3">
              {iposData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectStock(item.symbol);
                    onClose();
                  }}
                  className="p-3 bg-[#F0F3FA] rounded-xl flex items-center justify-between hover:bg-[#ededfa] cursor-pointer transition-colors border border-[#E0E3EB]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#191b24] text-white rounded-lg flex items-center justify-center font-bold text-[12px]">
                      {item.symbol}
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#191b24]">{item.name}</div>
                      <div className="text-[11px] text-[#6A6D78]">
                        Expected: {item.expectedDate} • Exchange: {item.exchange} • Shares: {item.sharesOffered || '20M'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-mono font-bold text-[#0049db]">
                      {item.priceRange}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-[#E0E3EB] bg-[#faf8ff] text-right">
          <button
            onClick={onClose}
            className="bg-[#191b24] text-white px-5 py-1.5 rounded-full text-[12px] font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
