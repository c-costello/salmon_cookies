var hour= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerCustomer: 6.3,
  cookiesPerHourFn : function() {
    var customersPerHour =  Math.round((Math.random()*(this.maxCustomers - this.minCustomers) + this.minCustomers));
    var cookiesPerHour = Math.round(customersPerHour * this.avgCookiePerCustomer);
    console.log('customersPerHour', customersPerHour);
    console.log('cookiesPerHour', cookiesPerHour);
    return [cookiesPerHour];
  },
  arrayFn : function () {
    var trialArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < hour.length; i++) {
      trialArray.push(hour[i] + ': ' + this.cookiesPerHourFn() + ' Cookies');
      console.log('cookiesPerHourFn', this.cookiesPerHourFn());
      console.log(trialArray);
      totalCookiesSold = totalCookiesSold + this.cookiesPerHourFn();
      console.log('totalCookiesSold', totalCookiesSold);
    }
    trialArray = trialArray.push(hour[4] + ': ' + totalCookiesSold + ' Cookies');
    console.log(trialArray);
    return [trialArray];
  },
};

firstAndPike.cookiesPerHourFn();
firstAndPike.arrayFn();

