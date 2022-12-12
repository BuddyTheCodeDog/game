const Character = require("./character");

class Mage extends Character {
    constructor(name){
        super(name,"Mage",1,7,4,4,25,100);
    }
}

module.exports = Mage;