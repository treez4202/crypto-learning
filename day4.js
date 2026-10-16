const tools = [
  { name: "TradingView", url: "https://www.tradingview.com", category: "Charts" },
  { name: "CoinGecko", url: "https://www.coingecko.com", category: "Research" },
  { name: "Yahoo Finance", url: "https://finance.yahoo.com", category: "Stocks" },
  { name: "ETF Database", url: "https://etfdb.com", category: "ETFs" },
  { name: "CryptoPanic", url: "https://cryptopanic.com", category: "News" },
  { name: "CoinMarketCap", url: "https://coinmarketcap.com", category: "Research" },
  { name: "MarketWatch", url: "https://www.marketwatch.com", category: "Stocks" },
  { name: "CoinDesk", url: "https://coindesk.com", category: "News" },
];

for (let i = 0; i < tools.length; i++) {
  const tool = tools[i];
  console.log(tool.name + " (" + tool.category + ") - " + tool.url);
}