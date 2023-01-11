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
