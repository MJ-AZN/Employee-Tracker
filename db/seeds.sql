-- Insert departments
INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('Finance');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 60000, 1), ('Software Engineer', 80000, 2), ('Accountant', 50000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 2, NULL), ('Jane', 'Doe', 1, NULL), ('Bob', 'Smith', 3, 1);
