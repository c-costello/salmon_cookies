var hour= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'TOTAL'];

var firstAndPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerCustomer: 6.3,
  totalCookies: function() {
    var customersPerHour = Math.floor((Math.random()*(this.maxCustomers - this.minCustomers) + this.minCustomers));
    console.log('customersPerHour',customersPerHour);
    var cookiesPerHour = Math.floor(customersPerHour * this.avgCookiePerCustomer);
    console.log('cookiesPerHour',cookiesPerHour);
    return [cookiesPerHour];
  },
  cookies6am: hour[0] + this.totalCookies(),
};

firstAndPike.totalCookies();
console.log(firstAndPike.cookies6am);
