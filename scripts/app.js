var hour= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'TOTAL'];

var firstAndPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerCustomer: 6.3,
  testFn : function() {
    var customersPerHour =  Math.round((Math.random()*(this.maxCustomers - this.minCustomers) + this.minCustomers));
    var cookiesPerHour = Math.round(customersPerHour * this.avgCookiePerCustomer);
    var cookies6am = hour[0] + ': ' + cookiesPerHour + ' cookies';
    console.log('customersPerHour', customersPerHour);
    console.log('cookiesPerHour', cookiesPerHour);
    console.log('cookies6am', cookies6am);
  }
};

firstAndPike.testFn();

