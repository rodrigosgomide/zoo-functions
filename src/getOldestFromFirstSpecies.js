const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((funcionario) => funcionario.id === id).responsibleFor[0];
  const animals = species.find((animal) => animal.id === animalId).residents;
  const oldestAnimal = animals.reduce((animal, currenAnimal) => animal.age > currenAnimal.age ? animal : currenAnimal)
  return Object.values(oldestAnimal)
}

module.exports = getOldestFromFirstSpecies;
