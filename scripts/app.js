var pikeAndFirst = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) { //better method than explicetly calling variable
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCustPerHour);
    }
  },
  generateHourlySales: function() {
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCookiesPerHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(randomCookiesPerHour);
      this.dailyTotal += randomCookiesPerHour;
    }
  },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');

    var containerEL = document.createElement('section');
    var storeNameEl = document.createElement('h3');

    storeNameEl.textContent = this.name;
    containerEL.appendChild(storeNameEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal}`;
    ulEl.appendChild(liEl);

    containerEL.appendChild(ulEl);
    mainEl.appendChild(containerEL);
  }, //don't do render () {}. Include the function.
};
pikeAndFirst.render();

var seaTac = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) { //better method than explicetly calling variable
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCustPerHour);
    }
  },
  generateHourlySales: function() {
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCookiesPerHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(randomCookiesPerHour);
      this.dailyTotal += randomCookiesPerHour;
    }
  },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');

    var containerEL = document.createElement('section');
    var storeNameEl = document.createElement('h3');

    storeNameEl.textContent = this.name;
    containerEL.appendChild(storeNameEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal}`;
    ulEl.appendChild(liEl);

    containerEL.appendChild(ulEl);
    mainEl.appendChild(containerEL);
  }, //don't do render () {}. Include the function.
};
seaTac.render();

var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) { //better method than explicetly calling variable
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCustPerHour);
    }
  },
  generateHourlySales: function() {
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCookiesPerHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(randomCookiesPerHour);
      this.dailyTotal += randomCookiesPerHour;
    }
  },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');

    var containerEL = document.createElement('section');
    var storeNameEl = document.createElement('h3');

    storeNameEl.textContent = this.name;
    containerEL.appendChild(storeNameEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal}`;
    ulEl.appendChild(liEl);

    containerEL.appendChild(ulEl);
    mainEl.appendChild(containerEL);
  }, //don't do render () {}. Include the function.
};
seattleCenter.render();

var capHill = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) { //better method than explicetly calling variable
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCustPerHour);
    }
  },
  generateHourlySales: function() {
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCookiesPerHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(randomCookiesPerHour);
      this.dailyTotal += randomCookiesPerHour;
    }
  },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');

    var containerEL = document.createElement('section');
    var storeNameEl = document.createElement('h3');

    storeNameEl.textContent = this.name;
    containerEL.appendChild(storeNameEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal}`;
    ulEl.appendChild(liEl);

    containerEL.appendChild(ulEl);
    mainEl.appendChild(containerEL);
  }, //don't do render () {}. Include the function.
};

capHill.render();

var alki = {
  name: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) { //better method than explicetly calling variable
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCustPerHour);
    }
  },
  generateHourlySales: function() {
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCookiesPerHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(randomCookiesPerHour);
      this.dailyTotal += randomCookiesPerHour;
    }
  },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');

    var containerEL = document.createElement('section');
    var storeNameEl = document.createElement('h3');

    storeNameEl.textContent = this.name;
    containerEL.appendChild(storeNameEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal}`;
    ulEl.appendChild(liEl);

    containerEL.appendChild(ulEl);
    mainEl.appendChild(containerEL);
  }, //don't do render () {}. Include the function.
};

alki.render();

