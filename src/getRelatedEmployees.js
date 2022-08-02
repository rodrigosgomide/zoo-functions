const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((empregado) => empregado.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((empregado) => empregado.managers.includes(managerId))
    .map((empregado) => `${empregado.firstName} ${empregado.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
