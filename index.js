const inquirer = require('inquirer');
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./queries');

const startApp = async () => {
  // Show initial options to the user
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    },
  ]);

  switch (choice) {
    case 'View all departments':
      const departments = await getAllDepartments();
      console.table(departments);
      break;
    case 'View all roles':
      const roles = await getAllRoles();
      console.table(roles);
      break;
    case 'View all employees':
      const employees = await getAllEmployees();
      console.table(employees);
      break;
    case 'Add a department':
      const { departmentName } = await inquirer.prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the department:',
        },
      ]);
      await addDepartment(departmentName);
      console.log('Department added successfully!');
      break;
    case 'Add a role':
      const { roleTitle, roleSalary, roleDepartment } = await inquirer.prompt([
        {
          type: 'input',
          name: 'roleTitle',
          message: 'Enter the title of the role:',
        },
        {
          type: 'input',
          name: 'roleSalary',
          message: 'Enter the salary for this role:',
        },
        {
          type: 'input',
          name: 'roleDepartment',
          message: 'Enter the department ID for this role:',
        },
      ]);
      await addRole(roleTitle, roleSalary, roleDepartment);
      console.log('Role added successfully!');
      break;
    case 'Add an employee':
      const { employeeFirstName, employeeLastName, employeeRole, employeeManager } = await inquirer.prompt([
        {
          type: 'input',
          name: 'employeeFirstName',
          message: 'Enter the first name of the employee:',
        },
        {
          type: 'input',
          name: 'employeeLastName',
          message: 'Enter the last name of the employee:',
        },
        {
          type: 'input',
          name: 'employeeRole',
          message: 'Enter the role ID for this employee:',
        },
        {
          type: 'input',
          name: 'employeeManager',
          message: 'Enter the manager ID for this employee (or leave blank if none):',
        },
      ]);
      await addEmployee(employeeFirstName, employeeLastName, employeeRole, employeeManager);
      console.log('Employee added successfully!');
      break;
    case 'Update an employee role':
      const { employeeId, newRoleId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'employeeId',
          message: 'Enter the ID of the employee you want to update:',
        },
        {
          type: 'input',
          name: 'newRoleId',
          message: 'Enter the new role ID for this employee:',
        },
      ]);
      await updateEmployeeRole(employeeId, newRoleId);
      console.log('Employee role updated successfully!');
      break;
    case 'Exit':
      process.exit();
      break;
    default:
      console.log('Invalid choice. Please try again.');
  }

  // After each operation, ask if the user wants to perform another action
  const { anotherAction } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'anotherAction',
      message: 'Do you want to perform another action?',
      default: true,
    },
  ]);

  if (anotherAction) {
    await startApp();
  } else {
    process.exit();
  }
};

startApp();
