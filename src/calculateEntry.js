const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age < 18) {
      result.child += 1;
    }
    if (age > 17 && age < 50) {
      result.adult += 1;
    }
    if (age > 49) {
      result.senior += 1;
    }
  });

  return result;
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const count = countEntrants(entrants);
  const { prices } = data;
  return count.child * prices.child + count.adult * prices.adult + count.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
