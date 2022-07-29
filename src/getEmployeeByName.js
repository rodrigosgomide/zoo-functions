const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const funcionarios = data.employees
  if (!employeeName) {
    return {}
  }
  return funcionarios.find(element => element.firstName == employeeName || element.lastName == employeeName)
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
