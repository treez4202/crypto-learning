const coins = ["bitcoin", "ethereum", "solana"];

async function getPrices() {
  const ids = coins.join(",");
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=" + ids + "&vs_currencies=usd&include_24hr_change=true";
  const response = await fetch(url);
  const data = await response.json();

  coins.forEach(function(coin) {
    const price = data[coin].usd;
    const change = data[coin].usd_24h_change.toFixed(2);
    console.log(coin + ": $" + price + " (" + change + "% 24h)");
  });
}

getPrices();