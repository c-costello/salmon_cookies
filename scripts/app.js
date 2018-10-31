var cookieStore = [];
var hoursOpen = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'TOTAL'];
var finalTotal = [];
var finalTotalArrayMiddleMan;
var extraVar2;
function CookieStore(name, minCustomer, maxCustomer, avgCookies) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.custPerHourArr = [];
  this.cookiesPerHourArr = [];
  this.dailyTotal = 0;

  cookieStore.push(this);
  this.render();
}

CookieStore.prototype.getCustomersPerHour = function (min, max) {
  for (var i = 0; i < this.hoursOpen.length; i++) {
    // console.log('min', min);
    // console.log('max',max);
    // var randomNumber = Math.random();
    // console.log('randomNumber', randomNumber);
    // console.log('mathCheck1', randomNumber * (max - min + 1) + min);
    // console.log('mathCheck2', randomNumber * (max - min + 1 ));
    var randomCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('randomCustPerHour',randomCustPerHour);
    this.custPerHourArr.push(randomCustPerHour);
  }
  // console.log('custPerHourArr', this.custPerHourArr);

};


CookieStore.prototype.getCookeisPerHour = function () {
  this.getCustomersPerHour(this.minCustomer, this.maxCustomer);
  console.log('custperhour', this.custPerHourArr);
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var randomCookiesPerHour = Math.floor(this.custPerHourArr[i] * this.avgCookies);
    this.cookiesPerHourArr.push(randomCookiesPerHour);
    this.dailyTotal += randomCookiesPerHour;
  }
  console.log(this.cookiesPerHourArr);
  finalTotalArrayMiddleMan = this.cookiesPerHourArr;
  console.log('finalTotalArrayMiddleMan', finalTotalArrayMiddleMan);
  finalTotal.push(finalTotalArrayMiddleMan);

};

CookieStore.prototype.render = function() {
  this.getCookeisPerHour();
  var tbodyEl = document.getElementById('tbl-body');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  //Names of stores
  thEl.textContent = '';
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  //For loops begin


  for (var i = 0; i < this.hoursOpen.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHourArr[i];
    trEl.appendChild(tdEl);
  }
  //for loops end
  //daily total!
  var tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = this.dailyTotal;
  trEl.appendChild(tdTotalEl);
  tdTotalEl.id = 'tblTotal';

  //append everything back in
  tbodyEl.appendChild(trEl);
};

function createTable() {
  var mainEl = document.getElementById('main-content');
  var tblEl = document.createElement('table');
  var theadEl = document.createElement('thead');
  var tbodyEl = document.createElement('tbody');
  var tfootEl = document.createElement('tfoot');

  mainEl.appendChild(tblEl);
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
  tblEl.appendChild(tfootEl);

  tblEl.id = 'cookies-table';
  theadEl.id = 'tbl-head';
  tbodyEl.id = 'tbl-body';
  tfootEl.id = 'tbl-foot';
  tblEl.className = 'tbl';

  
  function createHeader(){
    var tr2el = document.createElement('tr');
    for (var j = 0; j < hoursOpen.length; j++) {
      var th2el = document.createElement('th');
      th2el.textContent = hoursOpen[j];
      tr2el.appendChild(th2el);
      theadEl.appendChild(tr2el);
    }
  }

  createHeader();
  // createFooter();
}

function createFooter(){
  for (var a = 0; a < hoursOpen; a++){
    for (var b = 0; b < cookieStore.length; b++) {
        
    }
  }
}



//BELOW: BUTTONS and FORMS
var formEl = document.getElementById('form-data');
formEl.addEventListener('submit', function(event){
  event.preventDefault(); //stop page from refreshing
  
  console.log(event.target.sN.value);
  
  var nameInput = event.target.sN.value;
  var maxInput = parseInt(event.target.custMax.value);
  var minInput = parseInt(event.target.custMin.value);
  var avgInput = parseInt(event.target.cookieAvg.value);
  
  new CookieStore(nameInput, minInput, maxInput, avgInput);
});


//Call your code!

createTable();


new CookieStore('First and Pike', 23, 65, 6.3);
// new CookieStore('SeaTac Airport', 3, 24, 1.2);
// new CookieStore('Seattle Center', 11, 38, 3.7);
// new CookieStore('Capitol Hill', 20, 38, 2.3);
// new CookieStore('Alki', 2, 16, 4.6);