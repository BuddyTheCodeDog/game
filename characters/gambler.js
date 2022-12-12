const Character = require("./character");

class Gambler extends Character{
    constructor(name){
        super(name,"Gambler",5,2,2,7,50,50);
    }
}

module.exports = Gambler;