const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const allAnimals = species.reduce((acc, item) => (
    { ...acc, [item.name]: item.residents.length }), {});

  if (!animal) return allAnimals;
  if (!animal.sex) return allAnimals[animal.specie];

  const specie = species.find((item) => item.name === animal.specie);

  return specie.residents.filter((item) => item.sex === animal.sex).length;
}

module.exports = countAnimals;
