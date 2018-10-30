var hour= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerCustomer: 6.3,
  cookiesPerHourFn : function() {
    var customersPerHour =  Math.round((Math.random()*(this.maxCustomers - this.minCustomers) + this.minCustomers));
    var cookiesPerHour = Math.round(customersPerHour * this.avgCookiePerCustomer);
    return [cookiesPerHour];
  },
  arrayFn : function () {
    var trialArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < hour.length; i++) {
      var arrayCookiesPerHourFn = this.cookiesPerHourFn();
      trialArray.push(hour[i] + ': ' + arrayCookiesPerHourFn + ' Cookies');
      totalCookiesSold = totalCookiesSold + parseInt(arrayCookiesPerHourFn);
    }
    trialArray.push('Total Cookies: ' + totalCookiesSold);
    return [trialArray[0], trialArray[1], trialArray[2], trialArray[4], trialArray[5], trialArray[6], trialArray[7], trialArray[8], trialArray[9], trialArray[10], trialArray[11], trialArray[12], trialArray[13], trialArray[14], trialArray[15]];
  },

  render () {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    nameEl.textContent = this.name;
    container.appendChild(nameEl);

    for (var i = 0; i < this.arrayFn().length; i++){
      var listEl = document.createElement('li');
      listEl.textContent = this.arrayFn()[i];
      container.appendChild(listEl);
    }


    console.log('container', container);
    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(container);
  },
};

var seaTac = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerCustomer: 1.2,
  cookiesPerHourFn: function() {
    var customersPerHour = Math.round((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
    console.log('customersPerHour', this.customersPerHour);
    var cookiesPerHour = Math.round(customersPerHour * this.avgCookiePerCustomer);
    console.log('cookiesPerHour', cookiesPerHour);
    return [cookiesPerHour];
  },
  arrayFn: function() {
    var trialArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < hour.length; i++) {
      var arrayCookiesPerHourFn = this.cookiesPerHourFn();
      trialArray.push(hour[i] + ': ' + arrayCookiesPerHourFn + ' Cookies');
      console.log('arrayCookiesPerHour', arrayCookiesPerHourFn);
      totalCookiesSold = totalCookiesSold + parseInt(arrayCookiesPerHourFn);
      console.log('totalCookiesSold', totalCookiesSold);
    }
    trialArray.push('Total Cookies: ' + totalCookiesSold);
    console.log('trialArray', trialArray);
    return [trialArray[0], trialArray[1], trialArray[2], trialArray[4], trialArray[5], trialArray[6], trialArray[7], trialArray[8], trialArray[9], trialArray[10], trialArray[11], trialArray[12], trialArray[13], trialArray[14], trialArray[15]];
  },

  render () {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    nameEl.textContent = this.name;
    container.appendChild(nameEl);

    for (var i = 0; i < this.arrayFn().length; i++){
      var listEl = document.createElement('li');
      listEl.textContent = this.arrayFn()[i];
      container.appendChild(listEl);
    }


    console.log('container', container);
    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(container);
  },
};

var seattleCenter = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiePerCustomer:  3.7,
  cookiesPerHourFn: function(){
    var customersPerHour = Math.round((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
    console.log('customersPerHour', this.customersPerHour);
    var cookiesPerHour = Math.round(customersPerHour * this.avgCookiePerCustomer);
    console.log('cookiesPerHour', cookiesPerHour);
    return [cookiesPerHour];
  },
  arrayFn: function() {
    var trialArray = [];
    var totalCookiesSold = 0;
    for (var i =0; i < hour.length; i++) {
      var arrayCookiesPerHourFn = this.cookiesPerHourFn();
      trialArray.push(hour[i] + ': ' + arrayCookiesPerHourFn + ' Cookies');
      console.log('arrayCookiesPerHour', arrayCookiesPerHourFn);
      totalCookiesSold = totalCookiesSold + parseInt(arrayCookiesPerHourFn);
      console.log('totalCookiesSold', totalCookiesSold);
    }
    trialArray.push('Total Cookies: ' + totalCookiesSold);
    console.log('trialArray', trialArray);
    return [trialArray[0], trialArray[1], trialArray[2], trialArray[4], trialArray[5], trialArray[6], trialArray[7], trialArray[8], trialArray[9], trialArray[10], trialArray[11], trialArray[12], trialArray[13], trialArray[14], trialArray[15]];
  },

  render () {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    nameEl.textContent = this.name;
    container.appendChild(nameEl);

    for (var i = 0; i < this.arrayFn().length; i++){
      var listEl = document.createElement('li');
      listEl.textContent = this.arrayFn()[i];
      container.appendChild(listEl);
    }


    console.log('container', container);
    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(container);
  },

};

var capitolHill = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiePerCustomer: 2.3,
  cookiesPerHourFn: function (){
    var customersPerHour = Math.round((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
    console.log('customersPerHour', customersPerHour);
    var cookiesPerHour = Math.round(customersPerHour * this.avgCookiePerCustomer);
    console.log('cookiesPerHour', cookiesPerHour);
    return [cookiesPerHour];
  },
  arrayFn: function() {
    var trialArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < hour.length; i++) {
      var arrayCookiesPerHourFn = this.cookiesPerHourFn();
      trialArray.push(hour[i] + ': ' + arrayCookiesPerHourFn + ' Cookies');
      console.log('arrayCookiesPerHour', arrayCookiesPerHourFn);
      totalCookiesSold = totalCookiesSold + parseInt(arrayCookiesPerHourFn);
      console.log('totalCookiesSold', totalCookiesSold);
    }
    trialArray.push('Total Cookies: ' + totalCookiesSold);
    console.log('trialArray', trialArray);
    return [trialArray[0], trialArray[1], trialArray[2], trialArray[4], trialArray[5], trialArray[6], trialArray[7], trialArray[8], trialArray[9], trialArray[10], trialArray[11], trialArray[12], trialArray[13], trialArray[14], trialArray[15]];
  },

  render () {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    nameEl.textContent = this.name;
    container.appendChild(nameEl);

    for (var i = 0; i < this.arrayFn().length; i++){
      var listEl = document.createElement('li');
      listEl.textContent = this.arrayFn()[i];
      container.appendChild(listEl);
    }


    console.log('container', container);
    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(container);
  },

};

var alki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiePerCustomer: 2.4,
  cookiesPerHourFn: function() {
    var customersPerHour =  Math.round((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
    console.log('customersPerHour', customersPerHour);
    var cookiesPerHour = Math.round(customersPerHour * this.avgCookiePerCustomer);
    console.log('cookiesPerHour', cookiesPerHour);
    return [cookiesPerHour];
  },
  arrayFn: function() {
    var trialArray = [];
    var totalCookiesSold = 0;
    for (var i = 0; i < hour.length; i++) {
      var arrayCookiesPerHourFn = this.cookiesPerHourFn();
      trialArray.push(hour[i] + ': ' + arrayCookiesPerHourFn + ' Cookies');
      console.log('arrayCookiesPerHour', arrayCookiesPerHourFn);
      totalCookiesSold = totalCookiesSold + parseInt(arrayCookiesPerHourFn);
      console.log('TotalCookiesSold', totalCookiesSold);
    }
    trialArray.push('Total Cookies: ' + totalCookiesSold);
    console.log('trialArray', trialArray);
    return [trialArray[0], trialArray[1], trialArray[2], trialArray[4], trialArray[5], trialArray[6], trialArray[7], trialArray[8], trialArray[9], trialArray[10], trialArray[11], trialArray[12], trialArray[13], trialArray[14], trialArray[15]];
  },

  render () {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    nameEl.textContent = this.name;
    container.appendChild(nameEl);

    for (var i = 0; i < this.arrayFn().length; i++){
      var listEl = document.createElement('li');
      listEl.textContent = this.arrayFn()[i];
      container.appendChild(listEl);
    }


    console.log('container', container);
    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(container);
  },

};

firstAndPike.cookiesPerHourFn();
firstAndPike.arrayFn();
seaTac.cookiesPerHourFn();
seaTac.arrayFn();
seattleCenter.cookiesPerHourFn();
seattleCenter.arrayFn();
capitolHill.cookiesPerHourFn();
capitolHill.arrayFn();
alki.cookiesPerHourFn();
alki.arrayFn();
firstAndPike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();