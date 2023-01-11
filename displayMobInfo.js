function displayMobInfo(activeMob){
    const mobInfoContainer = document.getElementById("mob-info-container");
    mobInfoContainer.style.display="block";
    const mobInfoDiv = document.getElementById("mob-info");
    mobInfoDiv.innerHTML = activeMob.getMobInfoString();
    const mobImg = document.getElementById("mob-img");
    mobImg.src = activeMob.mobImg;
}

module.exports = displayMobInfo