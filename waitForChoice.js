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