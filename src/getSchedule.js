const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const days = {
//   Tuesday: {officeHour: '', exhibition: []},
//   Wednesday: {officeHour: '', exhibition: []},
//   Thursday: {officeHour: '', exhibition: []},
//   Friday: {officeHour: '', exhibition: []},
//   Saturday: {officeHour: '', exhibition: []},
//   Sunday: {officeHour: '', exhibition: []},
//   Monday: {officeHour: '', exhibition: []},
// };

function opneHcloseH(day, openClose) {
  if (openClose === 'open') {
    return data.hours[day].open;
  }
  return data.hours[day].close;
}
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
  const schadule = arrayDeDias.reduce((objeto, dia) => {
    if (dia === 'Monday') {
      objeto[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return objeto;
    }
    objeto[dia] = { officeHour: `Open from ${opneHcloseH(dia, 'open')}am until ${opneHcloseH(dia, 'close')}pm`, exhibition: exhibitionAvailability(dia) };
    return objeto;
  }, {});
  return schadule;
}
function daySchadule(dia) {
  const schadule = {};
  if (dia === 'Monday') {
    schadule[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return schadule;
  }
  schadule[dia] = { officeHour: `Open from ${opneHcloseH(dia, 'open')}am until ${opneHcloseH(dia, 'close')}pm`, exhibition: exhibitionAvailability(dia) };
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

module.exports = getSchedule;
