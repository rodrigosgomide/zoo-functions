const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEveryAnimals() {
  const everyAnimal = {};
  species.forEach((element) => {
    everyAnimal[element.name] = element.residents.length;
  });
  return everyAnimal;
}

function getAnimal(obj) {
  const name = obj.specie;
  return species.find((animal) => animal.name === name).residents.length;
}

function getAnimalbySex(obj) {
  const { specie, sex } = obj;
  console.log(specie, sex);
  return species.find((animal) => animal.name === specie)
    .residents.filter((animalSex) => animalSex.sex === sex).length;
}

function countAnimals(animal) {
  if (!animal) {
    return getEveryAnimals();
  }
  if (Object.keys(animal).length > 1) {
    return getAnimalbySex(animal);
  }
  return getAnimal(animal);
}

module.exports = countAnimals;
