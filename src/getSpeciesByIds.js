const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.length ? data.species.filter((specie) => ids.includes(specie.id)) : [];
}

module.exports = getSpeciesByIds;
