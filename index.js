//console.log("Hello, World!");
// const fs = require('fs');
// fs.copyFileSync("file1.txt", "file2.txt")

var superHeroes = require("superheroes");
var superVillains = require("supervillains");

var mySuperHeroName = superHeroes.random();
var mySuperVillain = superVillains.random();

console.log(mySuperHeroName);
console.log(mySuperVillain);
