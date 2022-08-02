const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const emp = data.employees;
  if (!employeeName) {
    return {};
  }
  return emp.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
