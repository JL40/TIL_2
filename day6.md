# 배열

* 다른 자바스크립트 데이터 값을 하나의 목록으로 만든 것
```javascript   
   var dinosTop3 = ["Tyrano", "Velo", "Stego"];
```  

* 배열을 사용하면 아래처럼 여러 개의 변수를 만들 필요가 없다.
```javascript
   var dinos = "Tyrano";
   var dinos2 = "Veloc";
   var dinos3 = "Stego";
```

## 배열 만들기
* 배열 안에 값을 넣을 때에는 각괄호[]를 사용한다.
```javascript
   var dinos = ["Tyrano", "Velo"];
   console.log(dinos); // ["Tyrano", "Velo"]
```

## 배열 바꾸기 
```javascript
     var dinos = ["Tyrano", 
	  "Velo", 
	  "Stego", 
	  "Trice", 
	  "Brachi", 
	  "Ptera", 
	  "Apato", 
	  "Diplo", 
	  "Compso"];

      dinos[0] = "T-Rex"; // 배열 dinos 0의 위치의 Tyrano를 T-Rex로 변경
      console.log(dinos);
      //[ "T-Rex", "Velo", "Stego", "Trice", "Brachi", "Ptera", "Apato", "Diplo", "Compso" ];
```

## 기존 배열에 원소 추가하기
```javascript
   dinos[15] = "Dino-Sapiens";
   // 15번째 자리에 "Dino-Sapiens" 원소가 들어간다.
```

## 배열에는 여러 자료형이 들어갈 수 있다.
```javascript
   var = dinosAndNums = ["Stego", 6, ["Trice", "Apato", 123.45]];
```

## 배열 속 내부 배열의 개별 원소에 접근하기
```javascript
   var = dinosAndNums[2];
   // ["Trice", "Apato", 123.45];
   dinosAndNus[2][0];
   // 내부 배열 첫 번째 원소 "Trice"만 반환
```

## 배열 다루기
* 배열의 길이 확인하기
```javascript
   var Xman = ["Wolverine", "Mystique", "Beast"];
   console.log(Xman[0]); // "Wolverine"
   console.log(Xman[1]); // "Mystique"
   console.log(Xman[2]); // "Beast"

   console.log(Xman.length); // 배열의 길이
   console.log(Xman[Xman.length -1]); // 배열의 가장 마지막 원소 "Beast"
```

## 배열에 원소 추가하기
* push 매서드를 사용하여 원소를 배열에 하나씩 추가할 수 있다.
* push 매서드는 해당 원소를 배열 마지막에 추가해 준다. 
```javascript
   var animals = [];
   animals.push("Cat");
   animals.push("Dog");
   animals.push("Lama");

   console.log(animals); // ["Cat", "Dog", "Lama"]
   console.log(animals.length) // 3(배열의 길이)
```

* unshift 매서드를 사용하여 추가할 수도 있다.
* push 매서드와는 다르게, unshift 매서드는 해당 원소를 배열 시작 부분에 추가해 준다. 
```javascript
   var animals = ["Cat", "Dog", "Lama"];
   animals.unshift("Pig") 
   
   // now,
   console.log(animals); // ["Pig", "Cat", "Dog", "Lama"]
```










 