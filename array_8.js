console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random());
console.log(Math.floor(3.567892345));

console.log(Math.floor(Math.random() * 4));


var ranwords = ["explosion", "cave", "princess", "pen"];
console.log(ranwords);
var ranindex = Math.floor(Math.random() * 4);
console.log(ranindex); // 랜덤한 위치가 0~3 사이에서 나옴
console.log(ranwords[ranindex]); // ranwords 안에서 랜덤한 색인이 나옴 

// 한 번에 하려면
console.log(ranwords[Math.floor(Math.random() * 4)]);
