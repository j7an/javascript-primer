"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
var NameAndWeather_1 = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var tempConverter_1 = require("./tempConverter");
var name = new NameAndWeather_1.Name("Adam", "Freeman");
var loc = new NameAndWeather_1.WeatherLocation("raining", "London");
var other = new DuplicateName_1.Name();
var cTemp = tempConverter_1.TempConverter.convertFtoC(38);
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);
console.log("The temp is " + cTemp + "C");
//# sourceMappingURL=primer.js.map