const Character = require("./character");
const Pet = require("./pet");
const potato = require("../weapons/potato");
const eatDogFood = require("../spells/eatDogFood");
const vape = require("../spells/vape");
const config = require("../config/classNames");
const gun = require("../weapons/gun");

class Shaman extends Character {
    constructor(name){
        super(name,config.classNames.ShamanClassName,3,5,5,3,100,70);
        const pet1 = new Pet("Buddy",7);
        this.pets.push(pet1);
        const pet2 = new Pet("RoboBuddy",11);
        this.pets.push(pet2);
        this.weapons.push(potato);
        this.weapons.push(gun);
        this.spells.push(eatDogFood);
        this.spells.push(vape);
    }
}

module.exports = Shaman;