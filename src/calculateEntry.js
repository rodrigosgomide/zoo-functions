const en = require('faker/lib/locales/en');
const data = require('../data/zoo_data');

const entrantsa = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];
  // < 18 child
  // >= 18 < 50 adult
  // >= 50 senior

function countEntrants(entrants) {
  if(!entrants || Object.entries(entrants).length === 0) {
    return 0
  }
  return entrants.reduce((objeto, person) => {
    if (person.age < 18) {
      objeto.child += 1
      return objeto
    }
    if (person.age >= 18 && person.age < 50) {
      objeto.adult += 1
      return objeto
    }
    if (person.age >= 50) {
      objeto.senior += 1
      return objeto
    }
    return objeto
  }, { child: 0, adult: 0, senior: 0 })
}

function calculateEntry(entrants) {
  if(!entrants || Object.entries(entrants).length === 0) {
    return 0
  }
  const child = countEntrants(entrants).child
  const adult = countEntrants(entrants).adult
  const senior = countEntrants(entrants).senior
  const valorTotal = (child * 20.99) + (adult * 49.99) + (senior * 24.99)
  return valorTotal
}

module.exports = { calculateEntry, countEntrants };
