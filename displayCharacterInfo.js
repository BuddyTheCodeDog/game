function displayCharacterInfo(character){
    const characterInfoContainer = document.getElementById("character-info-container");
    characterInfoContainer.style.display= "block";
    const characterInfoDiv = document.getElementById("character-info");
    characterInfoDiv.innerHTML =  character.getCharacterInfoString();
    const characterImg = document.getElementById("character-img");
    characterImg.src = character.characterImg;

}

module.exports = displayCharacterInfo