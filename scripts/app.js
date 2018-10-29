var hour= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerCustomer: 6.3,
  cookiesPerHourFn : function() {
    var customersPerHour =  Math.round((Math.random()*(this.maxCustomers - this.minCustomers) + this.minCustomers));
    console.log('customersPerHour', customersPerHour);
    var cookiesPerHour = Math.round(customersPerHour * this.avgCookiePerCustomer);
    console.log('cookiesPerHour', cookiesPerHour);
    return [cookiesPerHour];
  },
  arrayFn : function () {
    var trialArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < hour.length; i++) {
      var arrayCookiesPerHourFn = this.cookiesPerHourFn();
      trialArray.push(hour[i] + ': ' + arrayCookiesPerHourFn + ' Cookies');
      console.log('cookiesPerHourFn', arrayCookiesPerHourFn);
    
      totalCookiesSold = totalCookiesSold + parseInt(arrayCookiesPerHourFn);
      console.log('totalCookiesSold', totalCookiesSold);
    }
    trialArray.push('Total Cookies :' + totalCookiesSold);
    console.log(trialArray);
    return [trialArray];
  },
};

firstAndPike.cookiesPerHourFn();
firstAndPike.arrayFn();

