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
            const spell = this.spells[i];
            if(spell.name === spellName){
                console.log("Casting",spell.name);
                const manaCost = spell.manaCost;
                if(this.mana >= manaCost){
                this.mana = this.mana - manaCost;
                console.log("Spell Damage:");
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
        if(this.className === "Gambler"){
            this.attack = this.attack +2;
            this.health = this.health +10;
            this.mana = this.mana + 5;
        }
        else if(this.className === "Mage"){
            this.attack = this.attack +1;
            this.health = this.health +5;
            this.mana = this.mana + 10;
        }
        else if(this.className === "Shaman"){
            this.attack = this.attack +1;
            this.health = this.health +7;
            this.mana = this.mana + 7;
        }
    }
    getDamage(spell){
        if(this.activePet){
            const petDamage = this.activePet.damage;
            const magicDamage = this.magic;
            console.log("Pet Damage:");
            return petDamage + magicDamage;
        }
        else if(spell){
            const spellDamage = spell.damage;
            return spellDamage;
            
        }
        else if(this.activeWeapon){
            const attackDamage = this.attack;
            console.log("Weapon + Attack Damage:");
            return this.attack + this.activeWeapon.damage;
        }
        else{
            const attackDamage = this.attack;
            console.log("Attack Damage:");
            return attackDamage;
        }
    }
}

module.exports = Character;