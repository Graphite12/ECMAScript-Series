/* ES7 (ES2017) */

//Object.values / entries, 객체의 값, 키:값 쌍 배열형태 변환
const card = {
  a: 1,
  b: 2,
  c: 3,
};

Object.values(card); // [1,2,3]
Object.entries(card); // [a:1, b:2, c:3]

//Object.getOwnPropertyDescriptors, 객체의 속성을 설명함
const obj = {
  target: '타겟',
  cookie: '쿠키',
  session: '세션',
};

//하나의 속성을 불러옴
Object.getOwnPropertyDescriptor(obj, 'target');
//{value: '타겟', writable: true, enumerable: true, configurable: true}

//복수의 프로퍼티 불러옴
Object.getOwnPropertyDescriptors(obj);
//{target: {…}, cookie: {…}, session: {…}}

//String Padding, 문자 여백
String.prototype.padStart(num, str);
String.prototype.padEnd(num, str);

let str = 'kimchi';
str.padStart(10); //'    kimchi'
str.padEnd(10, 'ddd'); //'kimchidddd'

//Async, Await
async function asynchorous(a, b) {
  await a();
  let b = await b();
  return await c.d();
}
