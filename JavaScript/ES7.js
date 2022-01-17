/* ES7 (ES2016) */

//**, 제곱연산자
const script = (x) => x ** 5;
//script(2) === 32;

//includes, A에 대한 B 포함여부 확인 - [Array 객체의 메소드]
[1, 2, 3, 4, 5, 6].includes(1); //true
[1, 2, 3, 4, 5, 6].includes(1, 2, 3); //true
[1, 2, 3, 4, 5].includes(1, 2, 3, 4, 5, 6); //false
