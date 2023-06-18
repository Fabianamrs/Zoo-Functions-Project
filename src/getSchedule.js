const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const animals = species.map((item) => item.name);

const days = Object.keys(hours);
const monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

function scheduleByDay(day) { // alterar nome
  const result = [];
  species.forEach((item) => {
    if (item.availability.includes(day)) {
      result.push(item.name);
    }
  });
  return result;
}

function fullSchedule() {
  return days.reduce((acc, item) => {
    acc[item] = {
      officeHour: `Open from ${hours[item].open}am until ${hours[item].close}pm`,
      exhibition: scheduleByDay(item),
    };
    acc.Monday = monday;
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return fullSchedule();
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: monday };
  }
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: {
      officeHour: (
        `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`),
      exhibition: scheduleByDay(scheduleTarget) },
    };
  }
  if (animals.includes(scheduleTarget)) {
    return species.find((item) => item.name === scheduleTarget).availability;
  }
  return fullSchedule();
}

module.exports = getSchedule;
