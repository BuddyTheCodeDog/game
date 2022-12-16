const pawn = require("./pawn");
const bishop = require("./bishop");
const knight = require("./knight");
const rook = require("./rook");
const queen = require("./queen");
const king = require("./king");
const grandMaster = require("./grandmaster")

const allMobs = [pawn,bishop,knight,rook,queen,king,grandMaster];

module.exports = allMobs;