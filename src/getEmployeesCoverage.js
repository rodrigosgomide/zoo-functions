const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const creatObject = (id, fullName, species, locations) => {
  return {
    id,
    fullName,
    species,
    locations,
  }
}

function findEmploye(param) {
  return employees.find((employe) => employe.firstName === Object.values(param)[0] || employe.lastName === Object.values(param)[0] || employe.id === Object.values(param)[0])
} 

function returnSpecies(param) {
    return species.reduce((arr, animal) => {
    if(param.responsibleFor.includes(animal.id)) {
      arr.push(animal.name)
      return arr
    }
    return arr
  },[])
}
function returnLocation(param) {
  return species.reduce((arr, animal) => {
    if(param.responsibleFor.includes(animal.id)) {
      arr.push(animal.location)
      return arr
    }
    return arr
  },[])
} 

function isValid(obj) {
  const firstNanme = employees.map((employe) => employe.firstName)
  const lastName = employees.map((employe) => employe.lastName)
  const id = employees.map((employe) => employe.id)
  if(firstNanme.includes(Object.values(obj)[0])) {
    return true
  }
  if(lastName.includes(Object.values(obj)[0])) {
    return true
  }
  if(id.includes(Object.values(obj)[0])) {
    return true
  }
  return false
}


function getEmployeesCoverage(employeData) {
  if(!employeData) {
    return employees.map((employe) => {
      const animalName = returnSpecies(employe)
      const location = returnLocation(employe)
      return creatObject(employe.id, `${employe.firstName} ${employe.lastName}`, animalName, location)
    })
  }
  
  if(isValid(employeData) === false) {
    throw new Error ('Informações inválidas')
  }

  const employe = findEmploye(employeData)
  const animalName = returnSpecies(employe)
  const location = returnLocation(employe)
  return creatObject(employe.id, `${employe.firstName} ${employe.lastName}`, animalName, location)
}

module.exports = getEmployeesCoverage;
