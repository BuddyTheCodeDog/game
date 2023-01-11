const displayMobInfo = require("./displayMobInfo");
const allMobs = require("./mobs/allMobs");

function setActiveMob(mobIncr) {
    const mob = allMobs[mobIncr];
    let activeMob = mob;
    displayMobInfo(activeMob);
    return activeMob;
}

module.exports = setActiveMob