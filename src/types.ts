export type MarketCategory = 
  | 'US stocks' 
  | 'World stocks' 
  | 'Crypto' 
  | 'Futures' 
  | 'Forex' 
  | 'Government bonds' 
  | 'Corporate bonds' 
  | 'ETFs' 
  | 'Economy';

export interface IndexItem {
  id: string;
  badge: string;
  badgeBgColor: string;
  badgeTextColor?: string;
  name: string;
  value: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  sparklinePoints: string;
  description?: string;
  high52w?: string;
  low52w?: string;
}

export interface StockItem {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  isPositive: boolean;
  category: MarketCategory;
  volume?: string;
  marketCap?: string;
  peRatio?: string;
  dayHigh?: string;
  dayLow?: string;
  description?: string;
  sparklinePoints?: string;
}

export interface TableStock {
  symbol: string;
  name: string;
  price: string;
  changePercent: string;
  isPositive: boolean;
  volume?: string;
}

export interface EarningsEvent {
  id: string;
  symbol: string;
  name: string;
  date: string;
  actual: string;
  estimated: string;
  isBeat: boolean;
  category?: string;
}

export interface IpoEvent {
  id: string;
  symbol: string;
  name: string;
  expectedDate: string;
  sharesOffered?: string;
  priceRange: string;
  exchange: string;
}

export interface NavTab {
  id: string;
  label: string;
  href: string;
}
