const employers = ['Alex', '', 'ludmila', ' Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter( (name) => {
    if (name.length > 0 && name.length != '') {
		return name;
	}
});
// Имена

employersNames = employersNames.map( (name) => {
	return name.toLowerCase().trim();
});
// Удаляем пробелы и заглавные буквы

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
console.log(employersNames);

let calcCash = (own) => {
    own = own || 0;
    let everyCash = Array.prototype.slice.call(arguments);
    let total = own;
    for (let i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}

let money = calcCash(null, sponsors.cash);

let makeBusiness = (owner, director = 'Victor', cash, emp) => {
    let sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);