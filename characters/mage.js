const Character = require("./character");
const Pet = require("./pet");
const config = require("../config/classNames");
const coffeeCup = require("../weapons/coffeeCup");
const vape = require("../spells/vape");

class Mage extends Character {
    constructor(name){
        super(name,config.classNames.MageClassName,1,7,4,4,25,100);
        const pet1 = new Pet("Ghost", 10);
        this.pets.push(pet1);
        this.weapons.push(coffeeCup);
        this.spells.push(vape);
        
    }
}

module.exports = Mage;