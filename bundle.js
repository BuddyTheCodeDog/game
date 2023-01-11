(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../config/classNames":6}],2:[function(require,module,exports){
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
},{"../config/classNames":6,"../spells/boulders":25,"../weapons/cigar":31,"./character":1,"./pet":4}],3:[function(require,module,exports){
const Character = require("./character");
const Pet = require("./pet");
const config = require("../config/classNames");
const coffeeCup = require("../weapons/coffeeCup");
const vape = require("../spells/vape");

class Mage extends Character {
    constructor(name){
        super(name,config.classNames.MageClassName,1,7,4,4,25,100);
        const pet1 = new Pet("Ghost", 10);
        this.pets.push(pet1);
        this.weapons.push(coffeeCup);
        this.spells.push(vape);
        this.characterImg = 'https://cdn.pixabay.com/photo/2022/08/16/16/25/final-7390750_960_720.jpg'
        
    }
}

module.exports = Mage;
},{"../config/classNames":6,"../spells/vape":28,"../weapons/coffeeCup":32,"./character":1,"./pet":4}],4:[function(require,module,exports){
class Pet {
    constructor(name,damage){
        this.name = name;
        this.damage = damage;
    }
}

module.exports = Pet;
},{}],5:[function(require,module,exports){
const Character = require("./character");
const Pet = require("./pet");
const potato = require("../weapons/potato");
const eatDogFood = require("../spells/eatDogFood");
const vape = require("../spells/vape");
const config = require("../config/classNames");
const gun = require("../weapons/gun");

class Shaman extends Character {
    constructor(name){
        super(name,config.classNames.ShamanClassName,3,5,5,3,100,70);
        const pet1 = new Pet("Buddy",7);
        this.pets.push(pet1);
        const pet2 = new Pet("RoboBuddy",11);
        this.pets.push(pet2);
        this.weapons.push(potato);
        this.weapons.push(gun);
        this.spells.push(eatDogFood);
        this.spells.push(vape);
        this.characterImg = 'https://cdn.pixabay.com/photo/2021/01/27/05/26/dryad-5953593_960_720.jpg';
    }
}

module.exports = Shaman;
},{"../config/classNames":6,"../spells/eatDogFood":26,"../spells/vape":28,"../weapons/gun":33,"../weapons/potato":34,"./character":1,"./pet":4}],6:[function(require,module,exports){
const config ={
    classNames: {
        GamblerClassName: "gambler",
        MageClassName: "mage",
        ShamanClassName: "shaman"
    }
}

module.exports = config;
},{}],7:[function(require,module,exports){
function displayCharacterInfo(character){
    const characterInfoContainer = document.getElementById("character-info-container");
    characterInfoContainer.style.display= "block";
    const characterInfoDiv = document.getElementById("character-info");
    characterInfoDiv.innerHTML =  character.getCharacterInfoString();
    const characterImg = document.getElementById("character-img");
    characterImg.src = character.characterImg;

}

module.exports = displayCharacterInfo
},{}],8:[function(require,module,exports){
function displayChoices(){
    console.log("debug2");
    const userChoiceContainer = document.getElementById("user-choice-container");
    userChoiceContainer.style.display = "block";
};

module.exports = displayChoices
},{}],9:[function(require,module,exports){
function displayMobInfo(activeMob){
    const mobInfoContainer = document.getElementById("mob-info-container");
    mobInfoContainer.style.display="block";
    const mobInfoDiv = document.getElementById("mob-info");
    mobInfoDiv.innerHTML = activeMob.getMobInfoString();
    const mobImg = document.getElementById("mob-img");
    mobImg.src = activeMob.mobImg;
}

module.exports = displayMobInfo
},{}],10:[function(require,module,exports){
const hideChoices = require("./hideChoices");

//hideChoices 
function displaySecondaryChoice(character,choice) {
    hideChoices();
    const userSecondaryChoiceContainer = document.getElementById("user-secondary-choice-container");
    const userSecondaryChoiceH1 = document.getElementById("user-secondary-choice-h1");
    const userSecondaryChoice = document.getElementById("user-secondary-choice");
    userSecondaryChoiceContainer.style.display = "block";
    if(choice === 'castSpell'){

        userSecondaryChoiceH1.innerHTML = "Cast Spell";
        for(let i=0; i < character.spells.length; i++){
            let spell = character.spells[i];
            let button = document.createElement('button');
            button.innerText = spell.name;
            button.id = i;
            button.className = 'button';
            userSecondaryChoice.appendChild(button);
        }
    }
    else if(choice === 'equipWeapon'){
        userSecondaryChoiceH1.innerHTML = "Equip Weapon";
        for(let i=0; i < character.weapons.length; i++){
            let weapon = character.weapons[i];
            let button = document.createElement('button');
            button.innerText = weapon.name;
            button.id = i;
            button.className = 'button';
            userSecondaryChoice.appendChild(button);
        }

    }
    else if(choice === 'summonPet'){
        userSecondaryChoiceH1.innerHTML = 'Summon Pet';
        for(let i=0; i < character.pets.length; i++){
            let pet = character.pets[i];
            let button = document.createElement('button');
            button.innerText = pet.name;
            button.id = i;
            button.className = 'button';
            userSecondaryChoice.appendChild(button);
        }
    }

}

module.exports = displaySecondaryChoice
},{"./hideChoices":12}],11:[function(require,module,exports){
function hideCharacterSelect(){
    const characterSelectContainer = document.getElementById("character-select-container");
    characterSelectContainer.style.display= "none";
};

module.exports = hideCharacterSelect
},{}],12:[function(require,module,exports){
function hideChoices(){
    const userChoiceContainer = document.getElementById("user-choice-container");
    userChoiceContainer.style.display = "none";
    
}

module.exports = hideChoices
},{}],13:[function(require,module,exports){
function hideSecondaryChoice(){
    const userSecondaryChoiceContainer = document.getElementById("user-secondary-choice-container");
    const userChoiceContainer = document.getElementById("user-choice-container");
    const userSecondaryChoice = document.getElementById("user-secondary-choice");
    userChoiceContainer.style.display = "block";
    userSecondaryChoiceContainer.style.display = "none";
    while (userSecondaryChoice.firstChild) {
        userSecondaryChoice.removeChild(userSecondaryChoice.firstChild);
    }
}

module.exports = hideSecondaryChoice
},{}],14:[function(require,module,exports){
const Gambler = require("./characters/gambler");
const Mage = require("./characters/mage");
const Shaman = require("./characters/shaman");
const config = require("./config/classNames");
const displayCharacterInfo = require("./displayCharacterInfo");
const displayChoices = require("./displayChoices");
const displayMobInfo = require("./displayMobInfo");
const displaySecondaryChoice = require("./displaySecondaryChoice");
const hideCharacterSelect = require("./hideCharacterSelect");
const hideChoices = require("./hideChoices");
const hideSecondaryChoice = require("./hideSecondaryChoice");
const allMobs = require("./mobs/allMobs");
const mobs = require("./mobs/allMobs");
const setActiveMob = require("./setActiveMob");
const waitForChoice = require("./waitForChoice");
const waitForSecondaryChoice = require("./waitForSecondaryChoice");


let test;
let loss = 0;
let wins = 0;
let mobIncr = 0;
let character;
let activeMob;
let playerName = 'Buddy';

function chooseClass(pickClass){
    if(pickClass === config.classNames.GamblerClassName){
        character = new Gambler(playerName);
       }
       else if(pickClass === config.classNames.MageClassName){
        character = new Mage(playerName);
       }
       else if(pickClass === config.classNames.ShamanClassName){
        character = new Shaman(playerName);
       }

    console.log("my character is", character);
    hideCharacterSelect();
    displayCharacterInfo(character);
    startGameLoop();
    
};


async function startGameLoop(){
    const header = document.getElementById('header');
    header.style.display = 'none';

    const crowdNoise = document.getElementById("crowd-noise");
        crowdNoise.src = 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_da199d7bf6.mp3?filename=angry-mob-loop-6847.mp3'
        crowdNoise.loop = true;
        crowdNoise.volume = .5;
        crowdNoise.play();
    while(wins < 8 && loss ===0 ){
        

        console.log(wins,"wins");
        console.log(mobIncr,"mob incr");
        console.log(loss, "losses");
    activeMob = setActiveMob(mobIncr);
    console.log(character.health, activeMob.health);
    //fight
     while(character.health > 0 && activeMob.health > 0){
        console.log("debug");
        displayChoices();
        const choice = await waitForChoice();
        console.log(choice);

        //choice logic
        let damage = 0;
        if(choice === "castSpell"){
            console.log(character.spells);
             displaySecondaryChoice(character,choice);
             const secondaryChoice = await waitForSecondaryChoice();
             console.log(secondaryChoice);
             damage = character.castSpell(secondaryChoice);
             hideSecondaryChoice();

        }
        else if(choice === "fight"){
            damage = character.getDamage();
            console.log("damage is", damage);
            
        }
        else if(choice === "equipWeapon"){
            console.log(character.weapons);
            displaySecondaryChoice(character,choice);
            const secondaryChoice = await waitForSecondaryChoice();
            console.log(secondaryChoice);
            hideSecondaryChoice();
            character.equipWeapon(secondaryChoice);
            console.log("you equipped", secondaryChoice);
           
        }
        else if(choice === "summonPet"){
            console.log(character.pets);
            displaySecondaryChoice(character,choice);
            const secondaryChoice = await waitForSecondaryChoice();
            console.log(secondaryChoice);
            hideSecondaryChoice();
            character.summonPet(secondaryChoice);
            console.log("you summoned", secondaryChoice);
            
        }

        else{
            console.log("error");
            
        }
        //
        //continue game logic

        activeMob.health -= damage;
        console.log('damage done', damage);
        character.health -= activeMob.damage;
        console.log('damage recieved', activeMob.damage);
       
        const characterImg = document.getElementById("character-img");
        const mobImg = document.getElementById("mob-img");

            function shake(damage) {
                if(damage > 0){
                    mobImg.style.animation = "shake 0.5s"; 
                }
            
            characterImg.style.animation = "shake 0.5s";
            }

            function takeDamage() {
            shake(damage);
            setTimeout(() => {
                characterImg.style.animation = "";
                mobImg.style.animation = "";
            }, 500);
            }

            takeDamage();
            const damageNoise = document.getElementById("damage-noise");
            const damageSounds = ["https://cdn.pixabay.com/download/audio/2021/08/09/audio_420245a900.mp3?filename=fist-punch-or-kick-7171.mp3",'https://cdn.pixabay.com/download/audio/2022/03/10/audio_d2cdbf44ba.mp3?filename=punch-2-37333.mp3',"https://cdn.pixabay.com/download/audio/2021/08/04/audio_8df0887da7.mp3?filename=karate-chop-6357.mp3"];
            let randomSound = Math.floor(Math.random() * 3);
            damageNoise.src = damageSounds[randomSound];
            damageNoise.play();

        displayCharacterInfo(character);
        displayMobInfo(activeMob);

        if(activeMob.health <= 0){
            mobIncr += 1;
            wins += 1;
        }
        if(character.health <= 0){
            loss += 1;
            console.log(loss, "losses incr");
        }

    
     }
    }
    console.log(loss, "losses out side in purple");
    if(loss === 1){
        console.log("you lose");
        crowdNoise.volume = 0;
        const modal = document.getElementById('myModal');
        const modalContent = document.getElementById('modal-you-lose');
            modalContent.innerHTML="YOU LOSE";
              modal.style.display = "block";

              window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "block";
                }
              }
              
              var span = document.getElementsByClassName("close")[0];
              span.onclick = function() {
                modal.style.display = "none";
              }
    }
}



const gamblerButton = document.getElementById("gambler");
const mageButton = document.getElementById("mage");
const shamanButton = document.getElementById("shaman");

gamblerButton.addEventListener("click", function(){
    chooseClass("gambler");
});

mageButton.addEventListener("click", function(){
    chooseClass("mage");
});

shamanButton.addEventListener("click", function(){
    chooseClass("shaman");
});

},{"./characters/gambler":2,"./characters/mage":3,"./characters/shaman":5,"./config/classNames":6,"./displayCharacterInfo":7,"./displayChoices":8,"./displayMobInfo":9,"./displaySecondaryChoice":10,"./hideCharacterSelect":11,"./hideChoices":12,"./hideSecondaryChoice":13,"./mobs/allMobs":15,"./setActiveMob":24,"./waitForChoice":29,"./waitForSecondaryChoice":30}],15:[function(require,module,exports){
const pawn = require("./pawn");
const bishop = require("./bishop");
const knight = require("./knight");
const rook = require("./rook");
const queen = require("./queen");
const king = require("./king");
const grandMaster = require("./grandmaster")

const allMobs = [pawn,bishop,knight,rook,queen,king,grandMaster];

module.exports = allMobs;
},{"./bishop":16,"./grandmaster":17,"./king":18,"./knight":19,"./pawn":21,"./queen":22,"./rook":23}],16:[function(require,module,exports){
const Mob = require("./mob");

const bishop = new Mob("Bishop", 5, 11,"https://cdn.pixabay.com/photo/2020/04/22/16/44/elephant-5079038_960_720.jpg");

module.exports = bishop;
},{"./mob":20}],17:[function(require,module,exports){
const Mob = require("./mob");

const grandMaster = new Mob("Grand Master", 100, 200,'https://pbs.twimg.com/profile_images/1481100936583921665/F7cDVn6i_400x400.jpg');

module.exports = grandMaster;
},{"./mob":20}],18:[function(require,module,exports){
const Mob = require("./mob");

const king = new Mob("King", 1, 1,'https://cdn.pixabay.com/photo/2012/02/27/15/35/lion-17335_960_720.jpg');

module.exports = king;
},{"./mob":20}],19:[function(require,module,exports){
const Mob = require("./mob");

const knight = new Mob("Knight", 7, 20,"https://cdn.pixabay.com/photo/2014/03/19/22/55/the-horse-290907_960_720.jpg");

module.exports = knight;
},{"./mob":20}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
const Mob = require("./mob");

const pawn = new Mob("Pawn", 3, 4,"https://cdn.pixabay.com/photo/2020/04/07/10/39/particularly-5012919_960_720.jpg");

module.exports = pawn;
},{"./mob":20}],22:[function(require,module,exports){
const Mob = require("./mob");

const queen = new Mob("Queen", 10, 150,'https://cdn.pixabay.com/photo/2016/06/28/01/42/chess-1483735_960_720.jpg');

module.exports = queen;
},{"./mob":20}],23:[function(require,module,exports){
const Mob = require("./mob");

const rook = new Mob("Rook", 5, 20,'https://cdn.pixabay.com/photo/2015/11/15/19/58/castle-1044727_960_720.jpg');

module.exports = rook;
},{"./mob":20}],24:[function(require,module,exports){
const displayMobInfo = require("./displayMobInfo");
const allMobs = require("./mobs/allMobs");

function setActiveMob(mobIncr) {
    const mob = allMobs[mobIncr];
    let activeMob = mob;
    displayMobInfo(activeMob);
    return activeMob;
}

module.exports = setActiveMob
},{"./displayMobInfo":9,"./mobs/allMobs":15}],25:[function(require,module,exports){
const Spell = require("./spell");

const boulders = new Spell("Boulders",5,45);

module.exports = boulders;
},{"./spell":27}],26:[function(require,module,exports){
const Spell = require("./spell");

const eatDogFood = new Spell("Eat Dog Food",100,70);

module.exports = eatDogFood;
},{"./spell":27}],27:[function(require,module,exports){
class Spell {
    constructor(name,damage,manaCost){
        this.name = name;
        this.damage = damage;
        this.manaCost = manaCost;
    }
}

module.exports= Spell;
},{}],28:[function(require,module,exports){
const Spell = require("./spell");

const vape = new Spell("Vape Nicotine",5,45);

module.exports = vape;
},{"./spell":27}],29:[function(require,module,exports){
function waitForChoice(){
    //"chooooose a move: [1]fight, [2]equip weapon, [3]summon pet, [4]spell"
    console.log("debug3");
    const fightButton = document.getElementById("fight-button");
    const equipWeaponButton = document.getElementById("equip-weapon-button");
    const summonPetButton = document.getElementById("summon-pet-button");
    const castSpellButton = document.getElementById("cast-spell-button");

    return new Promise(function(resolve){
        fightButton.addEventListener("click", function(){
            resolve("fight");
        })
        equipWeaponButton.addEventListener("click", function(){
            resolve("equipWeapon");
        })
        summonPetButton.addEventListener("click", function(){
            resolve("summonPet");
        })
        castSpellButton.addEventListener("click", function(){
            resolve("castSpell");
        })
    })
};

module.exports = waitForChoice
},{}],30:[function(require,module,exports){
function waitForSecondaryChoice() {
    return new Promise((resolve) => {
        const buttons = document.querySelectorAll("#user-secondary-choice button");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                resolve(button.innerText);
            });
        });
    });
}

module.exports = waitForSecondaryChoice
},{}],31:[function(require,module,exports){
const Weapon = require("./weapon");

const cigar = new Weapon("Cigar",6);

module.exports = cigar;
},{"./weapon":35}],32:[function(require,module,exports){
const Weapon = require("./weapon");

const coffeeCup = new Weapon("Coffee Cup",6);

module.exports = coffeeCup;
},{"./weapon":35}],33:[function(require,module,exports){
const Weapon = require("./weapon");

const gun = new Weapon("Gun",6);

module.exports = gun;
},{"./weapon":35}],34:[function(require,module,exports){
const Weapon = require("./weapon");

const potato = new Weapon("Potato",6);

module.exports = potato;
},{"./weapon":35}],35:[function(require,module,exports){
class Weapon {
    constructor(name,damage){
        this.name = name;
        this.damage = damage;
    }
}

module.exports = Weapon;
},{}]},{},[14]);
