const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(... ids) {
  const animais = []
  ids.forEach((id) => {
    const animal = species.find((element) => element.id == id)
    animais.push(animal)
  }) 
  return animais; 
}

module.exports = getSpeciesByIds;
