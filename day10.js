async function getTopGainers() {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1";
  const response = await fetch(url);
  const data = await response.json();

  const gainers = data.filter(function(coin) {
    return coin.price_change_percentage_24h > 0;
  });

  gainers.sort(function(a, b) {
    return b.price_change_percentage_24h - a.price_change_percentage_24h;
  });

  const top5 = gainers.slice(0, 5);

  console.log("Top 5 Gainers (24h):");
  top5.forEach(function(coin) {
    const change = coin.price_change_percentage_24h.toFixed(2);
    console.log(coin.name + " (" + coin.symbol.toUpperCase() + "): +" + change + "%");
  });
}

getTopGainers();