const employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(emp => emp.length > 0).map(emp => emp.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {cash, eu, rus} = sponsors; 
// // деструктуризация

const calcCash = (own = 0, everyCash) => {
    const total = everyCash.reduce((accumulator, currentValue) => accumulator + currentValue, own);
    return total;
}

const money = calcCash(null, cash);

const makeBusiness = (owner, cash, emp, director = 'Victor') => {
    const sumSponsors = [...rus, ...eu, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}.`); 
    console.log(`Our budget: ${money}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness(...['Sam',  money, employersNames] );

