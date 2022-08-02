const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((funcionario) => funcionario.id === id).responsibleFor[0];
  const animals = species.find((animal) => animal.id === animalId).residents;
  const r = animals.reduce((animal, cAnimal) => (animal.age > cAnimal.age ? animal : cAnimal));
  return Object.values(r);
}

module.exports = getOldestFromFirstSpecies;
