var colist = ["Green", "Red", "Blue", "Black"];
var anilist = ["moose\'s", "lion\'s", "wolf\'s", "eagle\'s"];
var namelist = ["tear", "breath", "rise", "roar"];

var colors = Math.floor(Math.random() * 4);
var animals = Math.floor(Math.random() * 4);
var names = Math.floor(Math.random() * 4);
var first = colist[colors];
var second = anilist[animals];
var third = namelist[names];

var indion = [first, second, third, + "!!"].join(" ");
console.log(indion); // 맨 뒤가 NaN으로 나옴
