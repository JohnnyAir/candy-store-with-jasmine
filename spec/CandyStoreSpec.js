describe("Candy store", function() {
  var store;

  beforeAll(function() {
    var candies = [
      { name: "Gummy bears", qty: 510 },
      { name: "Lollipops", qty: 4 }
    ];

    store = new CandyStore();
    Array.prototype.push.apply(store.candies, candies);
  });

  describe("employee adds `Lollipops` to bin", function() {
    it("should properly increase `Lollipops` stock count", function() {
      store.addCandy("Lollipops", 600);
      expect(store.getCandyStockCount("Lollipops")).toBe(604);
    });

    it("should not change `Gummy bears` stock count", function() {
      expect(store.getCandyStockCount("Gummy bears")).toBe(510);
    });
  });
});
