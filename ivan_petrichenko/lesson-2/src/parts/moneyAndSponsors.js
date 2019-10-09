const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {eu, rus, cash} = sponsors;

const calcCash = (own, cash) => {
    if ((isNaN(own) || own == '' || own == null)) {
        own = 0;
    }
    const total = cash.reduce((a, b) => a + b, own);
    return total;
}
    
const money = calcCash(null, cash);
const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

export {eu, rus, cash, money, sumSponsors};