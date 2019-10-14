import {eu, money, sumSponsors} from './parts/moneyAndSponsors';
import {employersNames} from './parts/employers';

class MakeBusiness {
    constructor(owner = "Alena", cash = 0, emp = "No", director = 'Victor') {
        this.owner = owner;
        this.cash = cash;
        this.emp = emp;
        this.director = director;
    }

    showInfo() {
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}.`);
        console.log(`Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log('And we have a sponsors: ');
        console.log(...sumSponsors);
        console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
    }
}
const makeBusiness = new MakeBusiness('Sam', money, employersNames);
makeBusiness.showInfo();