async function getPrices() {
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd");
  const data = await response.json();
  console.log("Bitcoin: $" + data.bitcoin.usd);
  console.log("Ethereum: $" + data.ethereum.usd);
  console.log("Solana: $" + data.solana.usd);
}

getPrices();