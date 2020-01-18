var CandyStore = function() {
  this.candies = [];
};

CandyStore.prototype.getCandy = function(candyName) {
  return this.candies.filter(function(candy) {
    return candy.name === candyName;
  })[0];
};

CandyStore.prototype.getCandyStockCount = function(candyName) {
  return this.getCandy(candyName).qty;
};

CandyStore.prototype.addCandy = function(candyName, qty) {
  var candy = this.getCandy(candyName);
  candy.qty += qty;
};

CandyStore.prototype.removeCandy = function(candyName, qty) {
  var candy = this.getCandy(candyName);
  candy.qty -= qty;
};
