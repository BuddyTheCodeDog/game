const Character = require("./character");
const config = require("../config/classNames");

class Gambler extends Character{
    constructor(name){
        super(name,config.classNames.GamblerClassName,5,2,2,7,50,50);
    }
}

module.exports = Gambler;