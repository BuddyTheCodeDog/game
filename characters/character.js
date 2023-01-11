const config = require("../config/classNames");
class Character {
    constructor(name,className,attack,magic,defense,speed,health,mana){
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.pets = [];
        this.activePet = null;
        this.spells = [];
        this.weapons = [];
        this.activeWeapon = null;
        this.characterImg = null;

    }

    getCharacterInfoString(){
        let str = "";
        str += `Name: ${this.name} <br/>`;
        str += `Class: ${this.className}<br/>`;
        str += `Level: ${this.level}<br/>`;
        str += `Attack: ${this.attack}<br/>`;
        str += `Magic: ${this.magic}<br/>`;
        str += `Defense: ${this.defense}<br/>`;
        str += `Speed: ${this.speed}<br/>`;
        str += `Health: ${this.health}<br/>`;
        str += `Mana: ${this.mana}<br/>`;
        str += `Pets: ${this.pets.length}<br/>`;
        if(this.activePet){
            str += `Active Pet: ${this.activePet.name}<br/>`;
        };
        str += `Spells: ${this.spells.length}<br/>`;
        str += `Weapons: ${this.weapons.length}<br/>`;
        if(this.activeWeapon){
            str += `Active Weapon: ${this.activeWeapon.name}<br/>`;
        };

        return str;
        
    }

    summonPet(petName){
        for(let i = 0; i < this.pets.length; i++){
            const pet = this.pets[i];
            if(pet.name === petName){
                this.activePet = pet;
            }
            
        }
    }
    equipWeapon(weaponName){
        for(let i = 0; i < this.weapons.length; i ++){
            const weapon = this.weapons[i];
            if(weapon.name === weaponName){
                this.activeWeapon = weapon;
            } 
            
        }
    }
    castSpell(spellName){
        for(let i = 0; i < this.spells.length; i++){
            const spell = this.spells[i]; //have spell check
            if(spell.name === spellName){ 
                const manaCost = spell.manaCost; // mana check
                if(this.mana >= manaCost){
                this.mana = this.mana - manaCost;
                return this.getDamage(spell);
                }
                else{
                    console.log("Not Enough Mana NOOB");
                    console.log("Spell Damage:");
                    return 0;
                }
                
            }
            
        }
    }
    levelUp(){
        this.level = this.level +1;
        if(this.className === config.classNames.GamblerClassName){
            this.attack = this.attack +2;
            this.health = this.health +10;
            this.mana = this.mana + 5;
        }
        else if(this.className === config.classNames.MageClassName){
            this.attack = this.attack +1;
            this.health = this.health +5;
            this.mana = this.mana + 10;
        }
        else if(this.className === config.classNames.ShamanClassName){
            this.attack = this.attack +1;
            this.health = this.health +7;
            this.mana = this.mana + 7;
        }
    }
    getDamage(spell){
        if(spell){
            const spellDamage = spell.damage;
            return spellDamage;
        }
        if(this.activePet){
            const petDamage = this.activePet.damage;
            const magicDamage = this.magic;
            return petDamage + magicDamage;
        }
        else if(this.activeWeapon){
            const attackDamage = this.attack;
            
            return attackDamage + this.activeWeapon.damage;
        }
        else{
            const attackDamage = this.attack;

            return attackDamage;
        }
    }

    
    
    
}

module.exports = Character;