// 첫 번째 방법 
var colist = ["Green", "Red", "Blue", "Black"];
var anilist = ["moose\'s", "lion\'s", "wolf\'s", "eagle\'s"];
var namelist = ["tear", "breath", "rise", "roar"];

var colors = colist[Math.floor(Math.random() * 4)];
var animals = anilist[Math.floor(Math.random() * 4)];
var names = namelist[Math.floor(Math.random() * 4)];

var indian = colors + " " + animals + " " + names + "!!";
console.log(indian);
// join 이용한 다른 방법
var indians = [colors, animals, names + "!!"].join(" ");
console.log(indians);


// 두 번째 방법
var colist = ["Green", "Red", "Blue", "Black"];
var anilist = ["moose\'s", "lion\'s", "wolf\'s", "eagle\'s"];
var namelist = ["tear", "breath", "rise", "roar"];

var colors = Math.floor(Math.random() * 4);
var animals = Math.floor(Math.random() * 4);
var names = Math.floor(Math.random() * 4);

console.log(colist[colors], anilist[animals], namelist[names] +"!!")


// 세 번째 방법
var colist = ["Green", "Red", "Blue", "Black"];
var anilist = ["moose\'s", "lion\'s", "wolf\'s", "eagle\'s"];
var namelist = ["tear", "breath", "rise", "roar"];

var colors = Math.floor(Math.random() * 4);
var animals = Math.floor(Math.random() * 4);
var names = Math.floor(Math.random() * 4);
var first = colist[colors];
var second = anilist[animals];
var third = namelist[names];

console.log(first,second,third + "!!");
