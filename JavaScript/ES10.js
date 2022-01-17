/* ES10 (ES2019) */

// Optional catch binding, 선택적 catch 매개변수
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
