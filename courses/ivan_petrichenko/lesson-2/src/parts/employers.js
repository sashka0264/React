const employers = 
['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];
const employersNames = 
employers.filter(emp => emp.length > 0).map(emp => emp.toLowerCase().trim());

export {employersNames};