async function getTopCoins() {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";
  const response = await fetch(url);
  const data = await response.json();

  data.forEach(function(coin) {
    const change = coin.price_change_percentage_24h.toFixed(2);
    console.log(coin.name + " (" + coin.symbol.toUpperCase() + "): $" + coin.current_price + " (" + change + "% 24h)");
  });
}

getTopCoins();
