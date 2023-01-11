function characterSelectButtonListeners(){

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
    
    }

    module.exports = characterSelectButtonListeners