import { IndexItem, StockItem, TableStock, EarningsEvent, IpoEvent, MarketCategory } from '../types';

export const MAJOR_INDICES: IndexItem[] = [
  {
    id: 'sp500',
    badge: '500',
    badgeBgColor: '#ba1a1a', // market-loss red
    name: 'S&P 500',
    value: '5,344.16',
    change: '-12.35',
    changePercent: '-0.23%',
    isPositive: false,
    sparklinePoints: 'M0,15 L10,10 L20,18 L30,5 L40,25 L50,15 L60,20 L70,10 L80,28 L90,22 L100,29',
    description: 'Standard & Poor\'s 500 benchmark index representing 500 of the largest U.S. publicly traded companies.',
    high52w: '5,669.67',
    low52w: '4,103.78'
  },
  {
    id: 'nasdaq100',
    badge: '100',
    badgeBgColor: '#0097A7', // teal
    name: 'Nasdaq 100',
    value: '18,542.45',
    change: '+83.10',
    changePercent: '+0.45%',
    isPositive: true,
    sparklinePoints: 'M0,25 L10,20 L20,22 L30,15 L40,18 L50,10 L60,12 L70,5 L80,8 L90,2 L100,0',
    description: 'Tech-heavy equity benchmark tracking the 100 largest non-financial companies listed on Nasdaq.',
    high52w: '20,690.97',
    low52w: '13,882.20'
  },
  {
    id: 'dow30',
    badge: '30',
    badgeBgColor: '#0288D1', // blue
    name: 'Dow 30',
    value: '39,124.06',
    change: '+46.95',
    changePercent: '+0.12%',
    isPositive: true,
    sparklinePoints: 'M0,20 L10,18 L20,25 L30,22 L40,15 L50,18 L60,10 L70,15 L80,5 L90,10 L100,2',
    description: 'Dow Jones Industrial Average tracking 30 blue-chip U.S. corporate market leaders.',
    high52w: '41,376.00',
    low52w: '32,327.00'
  }
];

export const CATEGORY_STOCKS: Record<MarketCategory, StockItem[]> = {
  'US stocks': [
    { symbol: 'NVDA', name: 'NVIDIA', price: 114.25, changePercent: 2.4, isPositive: true, category: 'US stocks', volume: '62.4M', marketCap: '$2.81T', peRatio: '68.4', dayHigh: '116.50', dayLow: '112.10', description: 'Leader in AI chip production, GPUs, and parallel computing architectures.' },
    { symbol: 'AAPL', name: 'Apple', price: 214.50, changePercent: -0.8, isPositive: false, category: 'US stocks', volume: '48.1M', marketCap: '$3.28T', peRatio: '33.2', dayHigh: '217.10', dayLow: '213.80', description: 'Consumer electronics giant specializing in iPhone, Mac, services, and wearable tech.' },
    { symbol: 'AMZN', name: 'Amazon', price: 189.05, changePercent: 1.1, isPositive: true, category: 'US stocks', volume: '35.9M', marketCap: '$1.97T', peRatio: '42.1', dayHigh: '190.40', dayLow: '187.20', description: 'Global e-commerce marketplace and cloud computing service provider (AWS).' },
    { symbol: 'GOOGL', name: 'Alphabet', price: 175.30, changePercent: 0.5, isPositive: true, category: 'US stocks', volume: '22.8M', marketCap: '$2.19T', peRatio: '24.8', dayHigh: '176.80', dayLow: '174.10', description: 'Search engine infrastructure, digital advertising, YouTube, and Gemini AI platform.' },
    { symbol: 'TSLA', name: 'Tesla', price: 198.40, changePercent: -1.2, isPositive: false, category: 'US stocks', volume: '51.3M', marketCap: '$632B', peRatio: '58.9', dayHigh: '202.00', dayLow: '196.50', description: 'Electric vehicles, solar power systems, battery energy storage, and AI robotics.' },
    { symbol: 'MSFT', name: 'Microsoft', price: 452.10, changePercent: 0.9, isPositive: true, category: 'US stocks', volume: '28.4M', marketCap: '$3.36T', peRatio: '36.5', dayHigh: '454.80', dayLow: '449.20', description: 'Enterprise software, Windows, Azure cloud platform, Office 365, and OpenAI partnership.' }
  ],
  'World stocks': [
    { symbol: 'TSM', name: 'TSMC', price: 168.40, changePercent: 1.8, isPositive: true, category: 'World stocks', volume: '18.2M', marketCap: '$873B', peRatio: '28.4', dayHigh: '170.20', dayLow: '166.10', description: 'Taiwan Semiconductor Manufacturing Co., the world\'s largest dedicated semiconductor foundry.' },
    { symbol: 'ASML', name: 'ASML Holding', price: 885.20, changePercent: -0.6, isPositive: false, category: 'World stocks', volume: '1.4M', marketCap: '$348B', peRatio: '41.2', dayHigh: '894.00', dayLow: '880.50', description: 'Dutch photolithography technology provider for the semiconductor industry.' },
    { symbol: 'NVO', name: 'Novo Nordisk', price: 128.90, changePercent: 2.1, isPositive: true, category: 'World stocks', volume: '8.9M', marketCap: '$576B', peRatio: '38.6', dayHigh: '130.10', dayLow: '126.80', description: 'Danish pharmaceutical company leading diabetes and weight-loss treatments (Ozempic/Wegovy).' },
    { symbol: 'LVMUY', name: 'LVMH Moët Hennessy', price: 142.30, changePercent: -1.1, isPositive: false, category: 'World stocks', volume: '3.1M', marketCap: '$382B', peRatio: '22.3', dayHigh: '144.50', dayLow: '141.20', description: 'French luxury goods conglomerate owning Louis Vuitton, Dior, Moët & Chandon, and Tiffany.' },
    { symbol: 'TM', name: 'Toyota Motor', price: 204.10, changePercent: 0.8, isPositive: true, category: 'World stocks', volume: '2.8M', marketCap: '$274B', peRatio: '8.9', dayHigh: '206.00', dayLow: '203.20', description: 'Japanese automotive manufacturer renowned for hybrid technology and global production volume.' },
    { symbol: 'SAP', name: 'SAP SE', price: 212.80, changePercent: 1.4, isPositive: true, category: 'World stocks', volume: '2.1M', marketCap: '$261B', peRatio: '31.7', dayHigh: '214.20', dayLow: '210.50', description: 'German multinational enterprise software company providing ERP and cloud solutions.' }
  ],
  'Crypto': [
    { symbol: 'BTC/USD', name: 'Bitcoin', price: 61450.00, changePercent: 3.2, isPositive: true, category: 'Crypto', volume: '$28.4B', marketCap: '$1.21T', peRatio: 'N/A', dayHigh: '62100.00', dayLow: '59300.00', description: 'Decentralized digital currency created in 2009, acting as digital gold and store of value.' },
    { symbol: 'ETH/USD', name: 'Ethereum', price: 2980.50, changePercent: 2.7, isPositive: true, category: 'Crypto', volume: '$15.1B', marketCap: '$358B', peRatio: 'N/A', dayHigh: '3020.00', dayLow: '2890.00', description: 'Smart contract platform powering decentralized finance (DeFi) and Web3 applications.' },
    { symbol: 'SOL/USD', name: 'Solana', price: 148.20, changePercent: 5.4, isPositive: true, category: 'Crypto', volume: '$4.2B', marketCap: '$68.9B', peRatio: 'N/A', dayHigh: '152.00', dayLow: '140.50', description: 'High-throughput layer 1 blockchain designed for fast, low-fee decentralized applications.' },
    { symbol: 'XRP/USD', name: 'XRP', price: 0.58, changePercent: -0.9, isPositive: false, category: 'Crypto', volume: '$1.8B', marketCap: '$32.4B', peRatio: 'N/A', dayHigh: '0.60', dayLow: '0.57', description: 'Digital asset created for global cross-border remittance and bank settlement networks.' },
    { symbol: 'ADA/USD', name: 'Cardano', price: 0.39, changePercent: 1.2, isPositive: true, category: 'Crypto', volume: '$620M', marketCap: '$13.8B', peRatio: 'N/A', dayHigh: '0.40', dayLow: '0.38', description: 'Proof-of-stake blockchain built on peer-reviewed academic research.' },
    { symbol: 'AVAX/USD', name: 'Avalanche', price: 24.60, changePercent: -2.3, isPositive: false, category: 'Crypto', volume: '$340M', marketCap: '$9.7B', peRatio: 'N/A', dayHigh: '25.40', dayLow: '24.10', description: 'Subnet-enabled smart contract platform optimized for custom enterprise blockchains.' }
  ],
  'Futures': [
    { symbol: 'ES1!', name: 'E-mini S&P 500', price: 5360.25, changePercent: -0.15, isPositive: false, category: 'Futures', volume: '1.2M', dayHigh: '5380.00', dayLow: '5340.50', description: 'Globally traded futures contract tracking the standard S&P 500 index.' },
    { symbol: 'CL1!', name: 'Crude Oil WTI', price: 78.45, changePercent: 1.65, isPositive: true, category: 'Futures', volume: '412K', dayHigh: '79.20', dayLow: '77.10', description: 'West Texas Intermediate light sweet crude oil benchmark contract.' },
    { symbol: 'GC1!', name: 'Gold Futures', price: 2418.90, changePercent: 0.82, isPositive: true, category: 'Futures', volume: '280K', dayHigh: '2425.00', dayLow: '2398.00', description: 'Precious metal futures contract serving as a primary safe-haven asset hedge.' },
    { symbol: 'SI1!', name: 'Silver Futures', price: 28.35, changePercent: -0.45, isPositive: false, category: 'Futures', volume: '95K', dayHigh: '28.80', dayLow: '28.10', description: 'Industrial and monetary precious metal futures contract.' },
    { symbol: 'NG1!', name: 'Natural Gas', price: 2.14, changePercent: -3.10, isPositive: false, category: 'Futures', volume: '185K', dayHigh: '2.22', dayLow: '2.11', description: 'Henry Hub natural gas futures for energy heating and electrical generation.' },
    { symbol: 'HG1!', name: 'Copper Futures', price: 4.12, changePercent: 1.15, isPositive: true, category: 'Futures', volume: '68K', dayHigh: '4.16', dayLow: '4.08', description: 'Doctor Copper economic barometric commodity contract.' }
  ],
  'Forex': [
    { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0924, changePercent: 0.18, isPositive: true, category: 'Forex', volume: 'High', dayHigh: '1.0945', dayLow: '1.0902', description: 'Most liquid currency pair in the foreign exchange market representing Eurozone vs US Economy.' },
    { symbol: 'GBP/USD', name: 'British Pound / USD', price: 1.2810, changePercent: -0.12, isPositive: false, category: 'Forex', volume: 'High', dayHigh: '1.2842', dayLow: '1.2788', description: 'Cable currency pair measuring British sterling against the US greenback.' },
    { symbol: 'USD/JPY', name: 'USD / Japanese Yen', price: 147.85, changePercent: -0.85, isPositive: false, category: 'Forex', volume: 'High', dayHigh: '149.20', dayLow: '147.10', description: 'Major currency cross affected by Bank of Japan interest rate policy and US Treasuries.' },
    { symbol: 'AUD/USD', name: 'Australian Dollar / USD', price: 0.6540, changePercent: 0.42, isPositive: true, category: 'Forex', volume: 'Moderate', dayHigh: '0.6565', dayLow: '0.6510', description: 'Aussie commodity-linked currency pair closely tied to global growth and raw materials.' },
    { symbol: 'USD/CAD', name: 'USD / Canadian Dollar', price: 1.3780, changePercent: -0.22, isPositive: false, category: 'Forex', volume: 'Moderate', dayHigh: '1.3815', dayLow: '1.3755', description: 'Loonie pair influenced by oil prices and US-Canada bilateral trade flows.' },
    { symbol: 'EUR/GBP', name: 'Euro / British Pound', price: 0.8528, changePercent: 0.30, isPositive: true, category: 'Forex', volume: 'Moderate', dayHigh: '0.8540', dayLow: '0.8505', description: 'European cross measuring monetary divergence between ECB and Bank of England.' }
  ],
  'Government bonds': [
    { symbol: 'US10Y', name: 'US 10-Yr Note Yield', price: 3.88, changePercent: -1.8, isPositive: false, category: 'Government bonds', dayHigh: '3.94%', dayLow: '3.85%', description: 'Global risk-free rate benchmark for mortgage pricing and equity valuation.' },
    { symbol: 'US02Y', name: 'US 2-Yr Note Yield', price: 4.02, changePercent: -2.4, isPositive: false, category: 'Government bonds', dayHigh: '4.12%', dayLow: '3.99%', description: 'Short-duration rate benchmark closely mirroring Fed funds policy expectations.' },
    { symbol: 'DE10Y', name: 'Germany 10-Yr Bund', price: 2.18, changePercent: -1.2, isPositive: false, category: 'Government bonds', dayHigh: '2.21%', dayLow: '2.15%', description: 'Eurozone sovereign benchmark issued by the German Federal Debt Agency.' },
    { symbol: 'GB10Y', name: 'UK 10-Yr Gilt', price: 3.95, changePercent: 0.4, isPositive: true, category: 'Government bonds', dayHigh: '3.98%', dayLow: '3.92%', description: 'United Kingdom sovereign benchmark debt instrument.' },
    { symbol: 'JP10Y', name: 'Japan 10-Yr JGB', price: 0.88, changePercent: 3.5, isPositive: true, category: 'Government bonds', dayHigh: '0.90%', dayLow: '0.84%', description: 'Japanese sovereign yield subject to Bank of Japan yield curve controls.' },
    { symbol: 'US30Y', name: 'US 30-Yr Bond Yield', price: 4.18, changePercent: -1.1, isPositive: false, category: 'Government bonds', dayHigh: '4.23%', dayLow: '4.15%', description: 'Long-term US treasury bond tracking long-term inflation and fiscal debt outlooks.' }
  ],
  'Corporate bonds': [
    { symbol: 'HYG', name: 'iShares High Yield Corp', price: 77.20, changePercent: 0.35, isPositive: true, category: 'Corporate bonds', volume: '14.2M', description: 'Tracks US dollar-denominated high yield (junk) corporate bonds.' },
    { symbol: 'LQD', name: 'iShares Investment Grade', price: 109.80, changePercent: 0.28, isPositive: true, category: 'Corporate bonds', volume: '11.8M', description: 'Tracks liquid investment grade corporate bond credit markets.' },
    { symbol: 'VCIT', name: 'Vanguard Intermediate Corp', price: 81.40, changePercent: 0.15, isPositive: true, category: 'Corporate bonds', volume: '4.5M', description: 'Provides exposure to high quality corporate debt with 5-10 year maturities.' },
    { symbol: 'JNK', name: 'SPDR Bloomberg High Yield', price: 94.10, changePercent: 0.30, isPositive: true, category: 'Corporate bonds', volume: '6.1M', description: 'Popular benchmark tracking non-investment grade corporate debt instruments.' },
    { symbol: 'IGSB', name: 'iShares 1-5 Yr Corp Bond', price: 52.30, changePercent: 0.08, isPositive: true, category: 'Corporate bonds', volume: '3.9M', description: 'Short-duration corporate credit bond exposure for capital preservation.' },
    { symbol: 'MUB', name: 'iShares National Muni Bond', price: 107.50, changePercent: 0.12, isPositive: true, category: 'Corporate bonds', volume: '2.8M', description: 'Tax-exempt US municipal bond ETF issued by state and local governments.' }
  ],
  'ETFs': [
    { symbol: 'SPY', name: 'SPDR S&P 500 ETF', price: 533.20, changePercent: -0.21, isPositive: false, category: 'ETFs', volume: '65.2M', marketCap: '$560B', description: 'World\'s largest and most liquid ETF tracking the S&P 500 index.' },
    { symbol: 'QQQ', name: 'Invesco QQQ Trust', price: 472.40, changePercent: 0.42, isPositive: true, category: 'ETFs', volume: '42.8M', marketCap: '$285B', description: 'Tracks the top 100 technology and growth companies on Nasdaq.' },
    { symbol: 'VTI', name: 'Vanguard Total Stock Market', price: 264.10, changePercent: -0.15, isPositive: false, category: 'ETFs', volume: '3.8M', marketCap: '$410B', description: 'Broad market coverage of all investable US large, mid, and small-cap stocks.' },
    { symbol: 'IWM', name: 'iShares Russell 2000', price: 208.50, changePercent: -0.65, isPositive: false, category: 'ETFs', volume: '28.1M', marketCap: '$72B', description: 'Tracks US small-cap domestic equity segment.' },
    { symbol: 'GLD', name: 'SPDR Gold Shares', price: 222.80, changePercent: 0.85, isPositive: true, category: 'ETFs', volume: '7.9M', marketCap: '$68B', description: 'Physically backed gold bullion trust tracking spot gold prices.' },
    { symbol: 'ARKK', name: 'ARK Innovation ETF', price: 42.10, changePercent: 1.85, isPositive: true, category: 'ETFs', volume: '12.4M', marketCap: '$6.2B', description: 'Active fund focused on disruptive innovation, genomics, AI, and autonomous tech.' }
  ],
  'Economy': [
    { symbol: 'USCPI', name: 'US CPI Inflation Rate', price: 2.9, changePercent: -0.1, isPositive: true, category: 'Economy', dayHigh: '3.0%', dayLow: '2.9%', description: 'Consumer Price Index year-over-year headline rate compiled by BLS.' },
    { symbol: 'FEDRATE', name: 'Fed Target Rate Upper', price: 5.50, changePercent: 0.0, isPositive: true, category: 'Economy', dayHigh: '5.50%', dayLow: '5.25%', description: 'Federal Reserve benchmark policy target borrowing rate.' },
    { symbol: 'USGDP', name: 'US GDP Growth (QoQ)', price: 2.8, changePercent: 0.4, isPositive: true, category: 'Economy', dayHigh: '2.8%', dayLow: '2.4%', description: 'Quarterly annualized real gross domestic product expansion.' },
    { symbol: 'USUNEMP', name: 'US Unemployment Rate', price: 4.3, changePercent: 0.2, isPositive: false, category: 'Economy', dayHigh: '4.3%', dayLow: '4.1%', description: 'Percentage of labor force actively seeking employment.' },
    { symbol: 'USPAYROLL', name: 'Nonfarm Payrolls', price: 114, changePercent: -35.0, isPositive: false, category: 'Economy', dayHigh: '150K', dayLow: '114K', description: 'Monthly net change in total US employed nonfarm workers.' },
    { symbol: 'EURPMI', name: 'Eurozone Mfg PMI', price: 45.8, changePercent: -0.2, isPositive: false, category: 'Economy', dayHigh: '46.0', dayLow: '45.5', description: 'Purchasing Managers Index gauging industrial economic contraction/expansion.' }
  ]
};

export const HIGHEST_VOLUME_STOCKS: TableStock[] = [
  { symbol: 'NVDA', name: 'NVIDIA Corp', price: '114.25', changePercent: '+2.4%', isPositive: true, volume: '62.4M' },
  { symbol: 'MU', name: 'Micron Tech', price: '130.80', changePercent: '+1.8%', isPositive: true, volume: '48.9M' },
  { symbol: 'AMD', name: 'Advanced Micro', price: '160.25', changePercent: '+3.1%', isPositive: true, volume: '41.2M' },
  { symbol: 'TSLA', name: 'Tesla Inc', price: '198.40', changePercent: '-1.2%', isPositive: false, volume: '51.3M' },
  { symbol: 'AAPL', name: 'Apple Inc', price: '214.50', changePercent: '-0.8%', isPositive: false, volume: '48.1M' },
  { symbol: 'PLTR', name: 'Palantir Tech', price: '28.90', changePercent: '+4.5%', isPositive: true, volume: '39.8M' }
];

export const MOST_VOLATILE_STOCKS: TableStock[] = [
  { symbol: 'RCON', name: 'Recon Tech', price: '3.42', changePercent: '+45.2%', isPositive: true, volume: '12.4M' },
  { symbol: 'ZYBT', name: 'Zhengye Biotech', price: '1.85', changePercent: '-32.1%', isPositive: false, volume: '8.9M' },
  { symbol: 'JLHL', name: 'Julong Holding', price: '4.10', changePercent: '+28.5%', isPositive: true, volume: '15.1M' },
  { symbol: 'SMMT', name: 'Summit Therapeutics', price: '22.40', changePercent: '+18.9%', isPositive: true, volume: '9.4M' },
  { symbol: 'BNOX', name: 'Bionomics Ltd', price: '2.15', changePercent: '-24.3%', isPositive: false, volume: '6.7M' }
];

export const EARNINGS_EVENTS: EarningsEvent[] = [
  { id: 'e1', symbol: 'DUOL', name: 'Duolingo', date: 'Aug 5', actual: 'Act 0.66', estimated: 'Est 0.60', isBeat: true, category: 'Education' },
  { id: 'e2', symbol: 'GTE', name: 'Gran Tierra', date: 'Aug 5', actual: 'Act 0.70', estimated: 'Est 0.56', isBeat: true, category: 'Energy' },
  { id: 'e3', symbol: 'EPC', name: 'Edgewell', date: 'Aug 5', actual: 'Act 0.72', estimated: 'Est 0.64', isBeat: true, category: 'Consumer Goods' },
  { id: 'e4', symbol: 'PLTR', name: 'Palantir', date: 'Aug 5', actual: 'Act 0.09', estimated: 'Est 0.08', isBeat: true, category: 'Software' },
  { id: 'e5', symbol: 'DIS', name: 'Walt Disney', date: 'Aug 7', actual: 'Act 1.39', estimated: 'Est 1.19', isBeat: true, category: 'Entertainment' },
  { id: 'e6', symbol: 'LLY', name: 'Eli Lilly', date: 'Aug 8', actual: 'Act 3.92', estimated: 'Est 2.60', isBeat: true, category: 'Healthcare' }
];

export const IPO_EVENTS: IpoEvent[] = [
  { id: 'ipo1', symbol: 'LINE', name: 'Lineage Logistics', expectedDate: 'Aug 12', priceRange: '$78.00 - $82.00', exchange: 'NASDAQ', sharesOffered: '47M' },
  { id: 'ipo2', symbol: 'CGON', name: 'CGON Health', expectedDate: 'Aug 15', priceRange: '$14.00 - $16.00', exchange: 'NYSE', sharesOffered: '8M' },
  { id: 'ipo3', symbol: 'ONE', name: 'OneStream Inc', expectedDate: 'Aug 18', priceRange: '$20.00 - $22.00', exchange: 'NASDAQ', sharesOffered: '24.5M' }
];
