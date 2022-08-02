const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function findEmploye(param) {
  const emp = Object.values(param)[0];
  return employees.find((e) => e.firstName === emp || e.lastName === emp || e.id === emp);
}

function returnSpecies(param) {
  return species.reduce((arr, animal) => {
    if (param.responsibleFor.includes(animal.id)) {
      arr.push(animal.name);
      return arr;
    }
    return arr;
  }, []);
}
function returnLocation(param) {
  return species.reduce((arr, animal) => {
    if (param.responsibleFor.includes(animal.id)) {
      arr.push(animal.location);
      return arr;
    }
    return arr;
  }, []);
}

function isValid(obj) {
  const firstNanme = employees.map((employe) => employe.firstName);
  const lastName = employees.map((employe) => employe.lastName);
  const id = employees.map((employe) => employe.id);
  if (firstNanme.includes(Object.values(obj)[0])) {
    return true;
  }
  if (lastName.includes(Object.values(obj)[0])) {
    return true;
  }
  if (id.includes(Object.values(obj)[0])) {
    return true;
  }
  return false;
}

function getEmployeesCoverage(employeData) {
  if (!employeData) {
    return employees.map((e) => {
      const aN = returnSpecies(e);
      const l = returnLocation(e);
      return { id: e.id, fullName: `${e.firstName} ${e.lastName}`, species: aN, locations: l };
    });
  }

  if (isValid(employeData) === false) {
    throw new Error('Informações inválidas');
  }

  const e = findEmploye(employeData);
  const aN = returnSpecies(e);
  const l = returnLocation(e);
  return { id: e.id, fullName: `${e.firstName} ${e.lastName}`, species: aN, locations: l };
}

module.exports = getEmployeesCoverage;
