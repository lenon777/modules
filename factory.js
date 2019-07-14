function myFactoryOfBeer() {
  this.createBrand = function (brand) {
    var bottle;
    if (brand === "lvivske") {
      bottle = new Lvivske();
    } else if (brand === "heineken") {
      bottle = new Heineken();
    } else if (brand === "amstel") {
      bottle = new Amstel();
    }
    bottle.brand = brand;
    bottle.info = function () {
      console.log(this.brand + "beer costs " + this.price);
    }
    return bottle;
  }
}
function Lvivske() {
  this.price = "10grn"
}
function Heineken() {
  this.price = "25grn"
}
function Amstel() {
  this.price = "30grn"
}
var bf = new myFactoryOfBeer();
var lvivBeer = bf.createBrand("lvivske");
var heinekenBeer = bf.createBrand("heineken");
var amstelBeer = bf.createBrand("amstel");