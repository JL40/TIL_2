//concat 

var mmmls = ["Alpaca", "Monkey", "Yeti"];
var rept = ["Boa Const", "Gozilla"];
var mmmlsAnDrept = mmmls.concat(rept);
console.log(mmmlsAnDrept);
console.log(mmmls); // no change 
console.log(rept); // no change


var mmmls = ["Alpaca", "Monkey", "Yeti"];
var rept = ["Boa Const", "Gozilla"];
var birds = ["Cockatoo", "Dodo"];
var all = mmmls.concat(rept,birds);
console.log(all);
console.log(mmmls);
console.log(rept);
console.log(birds);


// indexOf

var colors = ["Red", "White", "Blue"];
console.log(colors.indexOf("Red"));
console.log(colors.indexOf("Blue"));

console.log(colors[2]);
console.log(colors.indexOf("Black"));


var insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
console.log(insects.indexOf("Bee"));


