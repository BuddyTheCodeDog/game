const Character = require("./character");
const Pet = require("./pet");
const potato = require("../weapons/potato");
const eatDogFood = require("../spells/eatDogFood");
const config = require("../config/classNames");

class Shaman extends Character {
    constructor(name){
        super(name,config.classNames.ShamanClassName,3,5,5,3,100,70);
        const pet1 = new Pet("Buddy",7);
        this.pets.push(pet1);
        const pet2 = new Pet("RoboBuddy",11);
        this.pets.push(pet2);
        this.weapons.push(potato);
        this.spells.push(eatDogFood);
    }
}

module.exports = Shaman;