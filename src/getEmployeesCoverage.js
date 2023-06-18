const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

const { employees, species } = data;

function getEmployeeInfo(employee) {
  const animals = employee.responsibleFor.map((item) => species.find((e) => e.id === item));
  const { locations, animalsSpecies } = animals.reduce((acc, { location, name }) => {
    acc.locations.push(location);
    acc.animalsSpecies.push(name);
    return acc;
  }, { locations: [], animalsSpecies: [] });

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animalsSpecies,
    locations,
  };
}

function getEmployeesCoverage(info) {
  if (!info) return employees.map((item) => getEmployeeInfo(item));

  try {
    const { name, id } = info;
    const employee = name ? getEmployeeByName(name) : employees.find((item) => item.id === id);
    return getEmployeeInfo(employee);
  } catch (error) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
