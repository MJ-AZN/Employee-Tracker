-- Insert departments
INSERT INTO department (name) VALUES ('Management'), ('lead'), ('FOH'), ('BOH');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES,
  ('Manager', 70000, 1),
  ('lead', 70000, 2),
  ('Server', 60000, 3),
  ('Busser', 57000, 3),
  ('Host', 50000, 3),
  ('Cook', 34000, 4)

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Grober', 'McGee', 1, 1),
  ('Timmy', 'Lee', 2, 2),
  ('Tyler', 'Nguyen', 2, 3),
  ('Jimmy', 'John', 2, 2),
  ('Harold', 'Santos', 3, 5),
  ('Hughie', 'Jeffords', 3, 5),
  ('Watson', 'Hubert', 4, 2),
  ('Hiram', 'Radzimierz', 8, 7),
  ('Tomasz', 'Dewey', 4, 7),
  ('Sunday', 'Wojciech', 4, 2);
