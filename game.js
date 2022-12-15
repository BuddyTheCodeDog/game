const Mage = require("./characters/mage");
const Gambler = require("./characters/gambler");
const prompt = require("prompt-promise");
const allMobs = require("./mobs/allMobs");

const Pet = require("./characters/pet");
const Shaman = require("./characters/shaman");
const config = require("./config/classNames");



//game start
let mob = allMobs[0];
async function gameLoop(){
    let character;
    let incr = 0;
    //pick name
    //pick class
   const pickClass = await prompt("Select class: gambler, mage, shaman (shaman has everything rn):\n");
   // if else bad entry 
   // create character class
   console.log(pickClass);
   if(pickClass === config.classNames.GamblerClassName){
    character = new Gambler("name");
   }
   else if(pickClass === config.classNames.MageClassName){
    character = new Mage("name");
   }
   else if(pickClass === config.classNames.ShamanClassName){
    character = new Shaman("name");
   }
   else{
    throw Error("WRONG INPUT, WORKING ON A BAD ENTRY LOOP FUNCTION");
   }

   // spawn 1st mob
   let mob = allMobs[0];
   

   //fight
   async function fight(mob){
    console.log(`LOOK OUT LOOOOOSER A ${mob.name} WANTS TO FUK AROUND AND FIND OUT`);


   while(character.health > 0 && mob.health > 0){
    //show player stats
    console.log(`Your HP: ${character.health}`);
    //show mob stats
    console.log(`Mob HP: ${mob.health}`);
    // show spells
    console.log(`${character.name} SPELLS`);
    console.log(character.spells);

    //player choice
    const choice = await prompt("chooooose a move: fight, equip weapon, summon pet, spell\n");
    //bad choice
    console.log(`you choooose ${choice}`);
    console.log(choice);

    let damage = 0;

    if(choice === "spell"){
        console.log(character.spells);
        pickSpell = await prompt("choose spell to cast: \n");
        damage = character.castSpell(pickSpell);
        console.log(damage);
         
    }
    else if(choice === "fight"){
        damage = character.getDamage();
        console.log(damage);
  
    }

    else if(choice === "equip weapon"){
        console.log(character.weapons);
        pickWeapon = await prompt("choose a weapon:\n");
        character.equipWeapon(pickWeapon);
        console.log(`you equiped ${character.activeWeapon.name} and lost a turn`);
    }
    else if(choice === "summon pet"){
        console.log(character.pets);
        pickPet = await prompt("choose a pet: \n");
        character.summonPet(pickPet);
        console.log(`You Summoned ${pickPet}`); //need bad input and pet summon log

    }



    console.log(`You did ${damage} of damage`);
    mob.health = mob.health - damage;
    const mobDamage = mob.damage;
    character.health = character.health - mob.damage;
    console.log(`${mob.name} did ${mobDamage} damage in return` );


   }

   console.log("fight over");
   character.levelUp();
   console.log(character.level,"new level");
   
   //loop fight
   const replay = await prompt("fight another? y or n\n");
   if(replay === "y"){ //need better looping w/ array limit to end game
    incr = incr + 1;
    mob = allMobs[incr];
    fight(mob);
   
   }

   
  
  
   }
   
   //start fight
   fight(mob);
   
   
}


gameLoop();