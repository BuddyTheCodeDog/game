const Character = require("./character");
const config = require("../config/classNames");

class Mage extends Character {
    constructor(name){
        super(name,config.classNames.MageClassName,1,7,4,4,25,100);
    }
}

module.exports = Mage;