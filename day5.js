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

console.log("All tools:");
tools.forEach(function (tool) {
  console.log(tool.name);
});

const newsTools = tools.filter(function (tool) {
  return tool.category === "News";
});

console.log("News tools:");
newsTools.forEach(function (tool) {
  console.log(tool.name + " - " + tool.url);
});

const names = tools.map(function (tool) {
  return tool.name;
});

console.log("Just the names:");
console.log(names); 

const stocksTools = tools.filter(function (tool) {
  return tool.category === "Stocks";
});

console.log("Stocks tools:");
stocksTools.forEach(function (tool) {
  console.log(tool.name + " - " + tool.url);
});