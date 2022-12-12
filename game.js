const Mage = require("./characters/mage");
const Gambler = require("./characters/gambler");


const Pet = require("./characters/pet");
const Shaman = require("./characters/shaman");



const myMage = new Mage("MageBuddy");
console.log(myMage);
const myGambler = new Gambler("GamblerBuddy");
console.log(myGambler);
const myShaman = new Shaman("ShamanBuddy");
console.log(myShaman);
console.log(myShaman);
myShaman.equipWeapon("Potato");
console.log(myShaman.getDamage());
