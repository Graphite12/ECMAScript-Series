/* ES10 (ES2019) */

// Optional catch binding, 선택적 catch 매개변수
// Original
try {
  otherErrorThrow();
} catch (error) {
  handleExeption(error);
}

//ES10
try {
  otherErrorThrow();
} catch {
  handleException();
}

// Object.fromEntries();

/**
 * Object.entries에선 객체리터럴을 배열로 결과를 반환한다.
 *
 * 하지만!, Object.fromEntries에서는 entries의 결과를 다시 객체리터럴로 변환한다.
 */

const objects = {
  name: 'obj',
  num: 123,
  kor: '한글',
  eng: 'english',
};

const entries = Object.entries(objects); //[Array(2), Array(2), Array(2), Array(2)]
const objLiteral = Object.fromEntries(entries); //{name: 'obj', num: 123, kor: '한글', eng: 'english'}

//계속 정리

/**
 * Symbol.prototype.description
 */

//original
const symbol = Symbol('text');
symbol.toString(); // 'Symbol(text)'
symbol.toString().slice(7, -1); //text

//ES10
symbol.description; //text

/**
 * Object.fromEntries()
 *
 * ES8에서 추가된 Object.entries와 호환되는 메소드
 *
 * entries를 통해 만들어진 배열을 다시 객체로 바꿔줌
 */

const object_unit = {
  name: 'KimKimKim',
  gender: 'male',
  stack: 'javascript, css, html, mysql',
};

const entrie = Object.entries(object_unit); //(3) [Array(2), Array(2), Array(2)]
const fromEntrie = Object.fromEntries(entrie); //{name: 'KimKimKim', gender: 'male', stack: 'javascript, css, html, mysql'}

/**
 * String.prototype.trimStart(),trimEnd()
 *
 * 문자열 앞 뒤 공백제거(왼쪽 오른쪽)
 */

const text = '    Minecraft Free Download ';
console.log(text.trimStart()); //Minecraft Free Download
console.log(text.trimEnd()); //    Minecraft Free Download

/**
 * Array.prototype.flat()
 *
 * flat() 메서드는 모든 하위 배열 요소를 재귀적으로 이어붙인 새로운 배열을 생성한다.
 *
 * 즉, Nested Array, 중첩된 배열을 하나의 배열로 평평하게 만든다.
 */

let arr = [1, [[2, 3]], 4, [[[5, 6], 7]], [[[[[[8]]]]]]];
arr.flat(); //  [1, Array(2), 4, Array(2), Array(1)]
arr.flat(2); //  [1, 2, 3, 4, Array(2), 7, Array(1)]
arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8]

arr = [1, 2, 3];
arr.flat(); // [1,2,3]

/**
 * Array.prototype.flatMap(); depth 1만
 *
 * flat과 map을 합친 메소드로 깊이 1의 배열을 map 수행 이후 flat이 동작하는 방식
 */

let arr3 = [1, 2, 3, 4];
arr3.flatMap((x) => x * 2); // [2,4,6,8]
arr3.flatMap((x) => [x * 2]); // [2,4,6,8] 여기까지가 1 depth
arr3.flatMap((x) => [[x * 2]]); // [[2],[4],[6],[8]]

//original
arr3.map((x) => [x * 2]); //[[2],[4],[6],[8]]
arr3.flat(); // [2,4,6,8]
