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