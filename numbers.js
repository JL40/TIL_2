var answer = Math.floor(Math.random() * 100) + 1;
var count = 0;

while(true) {
	var number = parseInt(prompt("1에서 100까지 중 아무 숫자나 입력하세요."));    
	if(number === answer) {
		console.log("정답!!" + (++count) + "번 만에 맞췄습니다!");
		break;
	} else if (number > answer) {
		console.log((++count) + "번 틀렸습니다. 더 작은 수를 입력하세요.");
		continue;
	} else {
		console.log((++count) + "번 틀렸습니다. 더 큰 수를 입력하세요");
	    continue;
	}
}
