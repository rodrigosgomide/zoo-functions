const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const createObject = (obj, chave, valor) => obj[chave] = valor
 

function countAnimals(animal) {
  
  if(!animal){
    const everyAnimal = {}
    species.forEach((element) => {
      createObject(everyAnimal,element.name, element.residents.length)
    })
    return everyAnimal
  }

  const [key,key2] = Object.keys(animal)
  if(key === 'specie' && !key2) {
    const { specie } = animal
    const animalsNumber = species.find((element) => element.name === specie).residents
    return Object.keys(animalsNumber).length
  }

  if(key === 'specie' && key2 === 'sex') {
    const { specie, sex } = animal
    const animalsNumber = species.find((element) => element.name === specie).residents
    return animalsNumber.filter((element) => element.sex === sex).length
  }
}

// const getAnimalsCount = ({ specie, sex }) => species.find((animalSpecie) => animalSpecie.name === specie).residents.filter((animal) => sex ? animal.sex === sex : animal).length
// const getAllAnimals = () => species.reduce((acc, specie) => Object.assign(acc, { [specie.name]: specie.residents.length }), {})
// const countAnimals = (animal) => animal ? getAnimalsCount(animal) : getAllAnimals()


module.exports = countAnimals;
