const data = require('../data/zoo_data');

function countChild(arr) {
  let child = 0;
  arr.forEach((p) => {
    if (p.age < 18) {
      child += 1;
    }
  });
  return child;
}
function countAdult(arr) {
  let adult = 0;
  arr.forEach((p) => {
    if (p.age >= 18 && p.age < 50) {
      adult += 1;
    }
  });
  return adult;
}
function countSenior(arr) {
  let senior = 0;
  arr.forEach((p) => {
    if (p.age >= 50) {
      senior += 1;
    }
  });
  return senior;
}
function countEntrants(e) {
  if (!e || Object.entries(e).length === 0) {
    return 0;
  }
  return { child: countChild(e), adult: countAdult(e), senior: countSenior(e) };
}

function calculateEntry(e) {
  if (!e || Object.entries(e).length === 0) {
    return 0;
  }
  const valorTotal = (countChild(e) * 20.99) + (countAdult(e) * 49.99) + (countSenior(e) * 24.99);
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
