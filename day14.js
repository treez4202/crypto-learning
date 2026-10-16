async function getPrices() {
  try {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("API returned status " + response.status);
    }

    const data = await response.json();

    console.log("Bitcoin: $" + data.bitcoin.usd);
    console.log("Ethereum: $" + data.ethereum.usd);
    console.log("Solana: $" + data.solana.usd);
  } catch (error) {
    console.log("Couldn't fetch prices: " + error.message);
    console.log("Check your internet and try again.");
  }
}

getPrices();
