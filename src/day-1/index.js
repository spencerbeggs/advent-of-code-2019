let mods = require("../../lib/input");

function calculateFuel(mod) {
  return Math.floor(mod / 3) - 2;
}

async function main() {
  let totalFuel = mods.reduce((acc, mod) => {
    return acc + calculateFuel(mod);
  }, 0);
  console.log(totalFuel);
}

main();
