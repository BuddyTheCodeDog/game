const Character = require("./character");
const Pet = require("./pet");
const potato = require("../weapons/potato");
const eatDogFood = require("../spells/eatDogFood");

class Shaman extends Character {
    constructor(name){
        super(name,"Shaman",3,5,5,3,100,70);
        const pet1 = new Pet("petName1",3);
        this.pets.push(pet1);
        const pet2 = new Pet("petname2",5);
        this.pets.push(pet2);
        this.weapons.push(potato);
        this.spells.push(eatDogFood);
    }
}

module.exports = Shaman;