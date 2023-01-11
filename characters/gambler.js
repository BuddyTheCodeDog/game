const Character = require("./character");
const Pet =require("./pet");
const config = require("../config/classNames");
const cigar = require("../weapons/cigar");
const boulders = require("../spells/boulders");

class Gambler extends Character{
    constructor(name){
        super(name,config.classNames.GamblerClassName,5,2,2,7,50,50);
        const pet1 = new Pet("Cultist",5);
        this.pets.push(pet1);
        this.weapons.push(cigar);
        this.spells.push(boulders);
        this.characterImg = 'https://cdn.pixabay.com/photo/2015/07/15/07/13/homeless-845752_960_720.jpg'
    }
}

module.exports = Gambler;