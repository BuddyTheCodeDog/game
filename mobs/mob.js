class Mob {
    constructor(name, damage, health, mobImg){
        this.name = name;
        this.damage = damage;
        this.health = health;
        this.mobImg = mobImg;
    }

    getMobInfoString(){
        let str = "";
        str += `Name: ${this.name} <br/>`;
        str += `Damage: ${this.damage}<br/>`;
        str += `Health: ${this.health}<br/>`;
        return str;
    }
}

module.exports = Mob