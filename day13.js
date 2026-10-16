const fs = require("fs");

async function saveGainers() {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1";
  const response = await fetch(url);
  const data = await response.json();

  const gainers = data.filter(function(coin) {
    return coin.price_change_percentage_24h > 0;
  });

  gainers.sort(function(a, b) {
    return b.price_change_percentage_24h - a.price_change_percentage_24h;
  });

  const all = gainers.map(function(coin) {
    return {
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      price: coin.current_price,
      change24h: Number(coin.price_change_percentage_24h.toFixed(2))
    };
  });

  fs.writeFileSync("gainers.json", JSON.stringify(all, null, 2));
console.log("Saved " + all.length + " gainers to gainers.json");
}

saveGainers();