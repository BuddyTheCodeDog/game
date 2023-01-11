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