// + 연산자나 join 사용하기

var adjlist = ["Hyper", "Super", "Duper", "Teeny"];
var adj2list = ["Happy", "Excited", "Hungry", "Itchy"];
var animallist = ["Lizard", "Tiger", "Wombat", "Panda"];

var adj = adjlist[Math.floor(Math.random() * 4)];
var adj2 = adj2list[Math.floor(Math.random() * 4)];
var animals = animallist[Math.floor(Math.random() * 4)];

var indian = "The" + adj + " " + adj2 + " " + animals + "!!";
console.log(indian);
// join 이용한 다른 방법
var indians = ["The", adj, adj2, animals + "!!"].join(" ");
console.log(indians);
