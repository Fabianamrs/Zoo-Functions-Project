const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((item) => item.id === id).responsibleFor[0];
  const animals = data.species.find((item) => item.id === specieId).residents;

  return Object.values(animals.sort((x, y) => ((x.age > y.age) ? -1 : 1))[0]);
}

module.exports = getOldestFromFirstSpecies;
