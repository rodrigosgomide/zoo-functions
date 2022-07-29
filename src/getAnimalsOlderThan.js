const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimalByName = species.find(element => element.name == animal)
  return getAnimalByName.residents.map((element) => element.age).every((element) => element > age)
}
// console.log(getAnimalsOlderThan('lions', 1));

module.exports = getAnimalsOlderThan;
