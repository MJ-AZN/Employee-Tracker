const connection = require('./config/connection');

const getAllDepartments = async () => {
  try {
    const [rows] = await connection.execute('SELECT * FROM department');
    return rows;
  } catch (error) {
    throw error;
  }
};

const getAllRoles = async () => {
  try {
    const [rows] = await connection.execute('SELECT * FROM role');
    return rows;
  } catch (error) {
    throw error;
  }
};

const getAllEmployees = async () => {
  try {
    const [rows] = await connection.execute('SELECT * FROM employee');
    return rows;
  } catch (error) {
    throw error;
  }
};

const addDepartment = async (name) => {
  try {
    const [result] = await connection.execute('INSERT INTO department (name) VALUES (?)', [name]);
    return result;
  } catch (error) {
    throw error;
  }
};

const addRole = async (title, salary, departmentId) => {
  try {
    const [result] = await connection.execute('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    return result;
  } catch (error) {
    throw error;
  }
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
  try {
    const [result] = await connection.execute('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
    return result;
  } catch (error) {
    throw error;
  }
};

const updateEmployeeRole = async (employeeId, newRoleId) => {
  try {
    const [result] = await connection.execute('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
