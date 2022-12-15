const Mage = require("./characters/mage");
const Gambler = require("./characters/gambler");
const prompt = require("prompt-promise");
const allMobs = require("./mobs/allMobs");

const Pet = require("./characters/pet");
const Shaman = require("./characters/shaman");
const config = require("./config/classNames");

let wins = 0;
async function fight(character,mob){
    console.log(`-----------------------`);
    console.log(`LOOK OUT LOOOOOSER! A ${mob.name} WANTS TO FUK AROUND AND FIND OUT`);
    console.log(`-----------------------`);


   while(character.health > 0 && mob.health > 0){
    //show player stats
    console.log(`-----------------------`);
    console.log(`Your HP: ${character.health}`);
    //show mob stats
    console.log(`Mob HP: ${mob.health}`);
    console.log(`-----------------------`);
    

    //player choice
    
    const choice = await prompt("chooooose a move: [1]fight, [2]equip weapon, [3]summon pet, [4]spell\n");
    //bad choice
    

    let damage = 0;

    
    if(choice === "4"){
        console.log(character.spells);
        pickSpell = await prompt("choose spell to cast: \n");
        damage = character.castSpell(pickSpell);
        
    }
    else if(choice === "1"){
        damage = character.getDamage();
  
    }

    else if(choice === "2"){
        console.log(character.weapons);
        pickWeapon = await prompt("choose a weapon:\n");
        character.equipWeapon(pickWeapon);
        console.log(`you equipped ${character.activeWeapon.name} and lost a turn`);
    }
    else if(choice === "3"){
        console.log(character.pets);
        pickPet = await prompt("choose a pet: \n");
        character.summonPet(pickPet);
        console.log(`You now have Summoned ${character.activePet} and lost a turn`); //need bad input and pet summon log

    }
    else{
        console.log("TYPE 1 2 3 or 4... idiot");
        console.log("LOSE A TURN FOR BEING DUMB");
        
    }


    console.log(`-----------------------`);
    console.log(`-----------------------`);
    console.log(`${character.name} did ${damage} damage`);
    mob.health = mob.health - damage;
    const mobDamage = mob.damage;
    character.health = character.health - mob.damage;
    console.log(`${mob.name} did ${mobDamage} damage in return` );
    console.log(`-----------------------`);


   } //while loop end

   console.log("!!!!!!!!!!!FIGHT OVER!!!!!!!!!");
   character.levelUp();
   console.log(`-----------------------`);
   console.log(`${character.name} LEVELED UP`);
   console.log(`LEVEL ${character.level}`);
   console.log(`-----------------------`);
   wins = wins +1;
   return wins;
   
   //loop fight
  
   
  
  
   } //fight function logic end



//game start

async function gameLoop(){
    let character;
    let incr = 0;
    //pick name
    const playerName = await prompt("Type player name:\n");

    //pick class
   const pickClass = await prompt("Select class: gambler, mage, shaman (shaman has everything rn):\n");
   // if else bad entry 
   // create character class
   if(pickClass === config.classNames.GamblerClassName){
    character = new Gambler(playerName);
   }
   else if(pickClass === config.classNames.MageClassName){
    character = new Mage(playerName);
   }
   else if(pickClass === config.classNames.ShamanClassName){
    character = new Shaman(playerName);
   }
   else{
    throw Error("WRONG INPUT, WORKING ON A BAD ENTRY LOOP FUNCTION");
   }
   console.log(`-----------------------`);
   console.log(character);
   console.log(`-----------------------`);
   // spawn 1st mob
   let mob = allMobs[0];
   


   //call fight function

   while(wins<4){
    wins = await fight(character,mob);
    incr = incr + 1;
     mob = allMobs[incr];
    const cont = await prompt(`HIT ENTER TO CONTINUE\n`);

    
   }
   
   
   
} //gameLoop end


gameLoop();