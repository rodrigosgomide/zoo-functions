const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function exhibitionAvailability(dia) {
  const spiciesAvalible = species.reduce((array, animal) => {
    if (animal.availability.includes(dia)) {
      array.push(animal.name);
      return array;
    }
    return array;
  }, []);
  return spiciesAvalible;
}
function generalSchedule(arrayDeDias) {
  const objeto = {};
  arrayDeDias.forEach((day) => {
    if (day === 'Monday') {
      objeto[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return objeto;
    }
    objeto[day] = { officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: exhibitionAvailability(day) };
    return objeto;
  });
  return objeto;
}
function daySchadule(dia) {
  const schadule = {};
  if (dia === 'Monday') {
    schadule[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return schadule;
  }
  schadule[dia] = { officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: exhibitionAvailability(dia) };
  return schadule;
}
function scheduleByName(animalName) {
  return species.find((animal) => animal.name === animalName).availability;
}

function getSchedule(scheduleTarget) {
  const animalsName = species.map((animal) => animal.name);
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

  if (animalsName.includes(scheduleTarget)) {
    return scheduleByName(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) {
    return daySchadule(scheduleTarget);
  }
  return generalSchedule(days);
}
const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
console.log(generalSchedule(days));
module.exports = getSchedule;
