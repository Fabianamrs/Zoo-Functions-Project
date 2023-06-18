const data = require('../data/zoo_data');

const { species } = data;

const structure = () => species.reduce(
  (acc, { location }) => ({ ...acc, [location]: [...(acc[location] || [])] }), [],
);

function defReturn() {
  return species.reduce((acc, { location, name }) => ({
    ...acc, [location]: [...acc[location], name],
  }), structure());
}

function getMapWithGenderFilter(sex, sorted) {
  return species.reduce((acc, { location, name, residents }) => {
    const animals = residents.filter((item) => (item.sex === sex));
    if (!sorted) { acc[location].push({ [name]: animals.map((item) => item.name) }); }
    if (sorted) { acc[location].push({ [name]: (animals.map((item) => item.name)).sort() }); }
    return acc;
  }, structure());
}

function getMapWithName(sorted) {
  return species.reduce((acc, { location, name, residents }) => {
    const animals = residents.map((item) => item.name);
    if (!sorted) { acc[location].push({ [name]: animals }); }
    if (sorted) { acc[location].push({ [name]: animals.sort() }); }
    return acc;
  }, structure());
}

function handleOptions({ includeNames, sorted, sex }) {
  if (!includeNames) return defReturn();
  if (!sex) return getMapWithName(sorted);
  return getMapWithGenderFilter(sex, sorted);
}

function getAnimalMap(options) {
  if (!options) return defReturn();
  return handleOptions(options);
}

module.exports = getAnimalMap;
