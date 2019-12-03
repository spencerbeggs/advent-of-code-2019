let mods = require("../../lib/input");

function calculateFuel(mod) {
  return Math.floor(mod / 3) - 2;
}

function part1() {
  let totalFuel = mods.reduce((acc, mod) => {
    return acc + calculateFuel(mod);
  }, 0);
  console.log(`Answer part 1: ${totalFuel}`);
}

function part2() {
  let totalFuel = mods.reduce((acc, mod, index, arr) => {
    let extraFuel = calculateFuel(mod);
    while (extraFuel > 0) {
      acc = acc + extraFuel;
      extraFuel = calculateFuel(extraFuel);
    }
    return acc;
  }, 0);
  console.log(`Answer part 2: ${totalFuel}`);
}

async function main() {
  part1();
  part2();
}

main();
