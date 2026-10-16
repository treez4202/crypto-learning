const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("\n=== Crypto Toolkit ===");
  console.log("1. Live prices (BTC/ETH/SOL)");
  console.log("2. Top 10 by market cap");
  console.log("3. Top 5 gainers");
  console.log("4. Save gainers to file");
  console.log("5. Exit");
  rl.question("Pick a number: ", handleChoice);
}

async function handleChoice(choice) {
  if (choice === "1") {
    await showPrices();
  } else if (choice === "2") {
    await showTop10();
  } else if (choice === "3") {
    await showGainers();
  } else if (choice === "4") {
    await saveGainers();
  } else if (choice === "5") {
    console.log("See ya!");
    rl.close();
    return;
  } else {
    console.log("Pick a number 1-5.");
  }
  showMenu();
}

async function showPrices() {
  try {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API returned " + response.status);
    }
    const data = await response.json();
    console.log("Bitcoin: $" + data.bitcoin.usd);
    console.log("Ethereum: $" + data.ethereum.usd);
    console.log("Solana: $" + data.solana.usd);
  } catch (error) {
    console.log("Couldn't fetch prices: " + error.message);
  }
}

async function showTop10() {
  try {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API returned " + response.status);
    }
    const data = await response.json();
    console.log("\nTop 10 by market cap:");
    data.forEach(function(coin) {
      console.log(coin.name + " (" + coin.symbol.toUpperCase() + "): $" + coin.current_price);
    });
  } catch (error) {
    console.log("Couldn't fetch top 10: " + error.message);
  }
}

async function showGainers() {
  try {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API returned " + response.status);
    }
    const data = await response.json();
    const gainers = data.filter(function(coin) {
      return coin.price_change_percentage_24h > 0;
    });
    gainers.sort(function(a, b) {
      return b.price_change_percentage_24h - a.price_change_percentage_24h;
    });
    const top5 = gainers.slice(0, 5);
    console.log("\nTop 5 Gainers (24h):");
    top5.forEach(function(coin) {
      const change = coin.price_change_percentage_24h.toFixed(2);
      console.log(coin.name + " (" + coin.symbol.toUpperCase() + "): +" + change + "%");
    });
  } catch (error) {
    console.log("Couldn't fetch gainers: " + error.message);
  }
}

async function saveGainers() {
  try {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API returned " + response.status);
    }
    const data = await response.json();
    const gainers = data.filter(function(coin) {
      return coin.price_change_percentage_24h > 0;
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
  } catch (error) {
    console.log("Couldn't save gainers: " + error.message);
  }
}

showMenu();