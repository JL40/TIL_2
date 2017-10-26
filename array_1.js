var dinos = ["Tyrano", "Velo", "Stego", "Trice", "Brachi", "Ptera", "Apato", "Diplo", "Compso"];

console.log(dinos[0]);
console.log(dinos[5]);

dinos[0] = "T-Rex"; // 배열 dinos 0의 위치의 Tyrano를 T-Rex로 변경
console.log(dinos[0]);


// 배열의 각 원소를 각괄호로 설정하기
var dinos = [];
dinos[0] = "T-Rex";
dinos[1] = "Velo";
dinos[2] = "Stego";
dinos[3] = "Trice";
dinos[4] = "Brachi";
dinos[5] = "Ptera";
dinos[6] = "Apato";
dinos[7] = "Diplo";
dinos[8] = "Compso";

console.log(dinos);


// 기존 배열에 새 원호 추가하기
dinos[15] = "Dino-Sapiens";

console.log(dinos); 


var dinoAndNum = [3, "Dinos", ["Trice", "Stego", 3627.5], 10];
console.log(dinoAndNum[2][2]); // dinoAndNum배열 안의 배열([2])로 가서 [2]에 위치한 3627.5를 보여준다


 