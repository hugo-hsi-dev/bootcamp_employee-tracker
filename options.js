import viewAllEmployees from './options/viewAllEmployees.js';
import addEmployee from './options/addEmployee.js';
import updateEmployeeRole from './options/updateEmployeeRole.js';
import viewAllRoles from './options/viewAllRoles.js';

function placeholder() {
  console.log('here');
}

const optionsLookup = {
  'View All Employees': viewAllEmployees,
  'Add Employee': addEmployee,
  'Update Employee Role': updateEmployeeRole,
  'View All Roles': viewAllRoles,
  'Add Role': placeholder,
  'View All Departments': placeholder,
  'Add Department': placeholder,
};

export default optionsLookup;
