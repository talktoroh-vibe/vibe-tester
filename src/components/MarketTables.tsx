import React from 'react';
import { TableStock } from '../types';

interface MarketTablesProps {
  highestVolume: TableStock[];
  mostVolatile: TableStock[];
  onSelectTableStock: (stockSymbol: string) => void;
  onOpenVolumeModal: () => void;
  onOpenVolatileModal: () => void;
}

export const MarketTables: React.FC<MarketTablesProps> = ({
  highestVolume,
  mostVolatile,
  onSelectTableStock,
  onOpenVolumeModal,
  onOpenVolatileModal
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {/* Highest Volume Table */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-[16px] font-semibold text-[#191b24]">Highest volume</h4>
          <button
            onClick={onOpenVolumeModal}
            className="text-[12px] text-[#0049db] hover:underline font-medium"
          >
            More
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E0E3EB] text-[11px] font-bold text-[#6A6D78] uppercase tracking-wider">
                <th className="py-2 font-semibold">Symbol</th>
                <th className="py-2 font-semibold text-right">Price</th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {highestVolume.slice(0, 3).map((item) => (
                <tr
                  key={item.symbol}
                  onClick={() => onSelectTableStock(item.symbol)}
                  className="border-b border-[#e1e1ee] hover:bg-[#F0F3FA] transition-colors cursor-pointer"
                >
                  <td className="py-2.5 flex flex-col">
                    <span className="font-medium text-[#191b24]">{item.symbol}</span>
                    <span className="text-[10px] text-[#6A6D78] truncate max-w-[140px]">
                      {item.name}
                    </span>
                  </td>
                  <td className="py-2.5 text-right font-mono font-medium text-[#191b24]">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Most Volatile Table */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-[16px] font-semibold text-[#191b24]">Most volatile</h4>
          <button
            onClick={onOpenVolatileModal}
            className="text-[12px] text-[#0049db] hover:underline font-medium"
          >
            More
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E0E3EB] text-[11px] font-bold text-[#6A6D78] uppercase tracking-wider">
                <th className="py-2 font-semibold">Symbol</th>
                <th className="py-2 font-semibold text-right">Chg %</th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {mostVolatile.slice(0, 3).map((item) => (
                <tr
                  key={item.symbol}
                  onClick={() => onSelectTableStock(item.symbol)}
                  className="border-b border-[#e1e1ee] hover:bg-[#F0F3FA] transition-colors cursor-pointer"
                >
                  <td className="py-2.5 flex flex-col">
                    <span className="font-medium text-[#191b24]">{item.symbol}</span>
                    <span className="text-[10px] text-[#6A6D78] truncate max-w-[140px]">
                      {item.name}
                    </span>
                  </td>
                  <td
                    className={`py-2.5 text-right font-mono font-medium ${
                      item.isPositive ? 'text-[#089981]' : 'text-[#F23645]'
                    }`}
                  >
                    {item.changePercent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
