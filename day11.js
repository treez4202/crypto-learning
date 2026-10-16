async function getPrices() {
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true";
  const response = await fetch(url);
  const data = await response.json();

  console.clear();
  console.log("Live prices - " + new Date().toLocaleTimeString());
  console.log("Bitcoin: $" + data.bitcoin.usd);
  console.log("Ethereum: $" + data.ethereum.usd);
  console.log("Solana: $" + data.solana.usd);
}

getPrices();
setInterval(getPrices, 30000);