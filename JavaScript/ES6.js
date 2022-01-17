/**
 * ES6 (ES2015)
 */

//const 와 let
const variable1 = `a`; //블록레벨, 재선언 재할달 불가

let variable2; //블록레벨, 재선언 불가 재할당 가능
variable2 = `b`;
let variable3 = 'c';

//Arrow function(화살표 함수)
const func = (para) => {
  para; //화살표로 리턴 생략가능
};

myArr = [1, 2, 3, 4, 5];
let arr2 = myArr.map((item) => item); // map, reduce, filter... 화살표 함수 지원

//화살표 함수는 this를 지원하지 않는다.

//Template Literals 템블릿 리터럴

const funcs = (a, b) => {
  return `템플릿리터럴이란 이런것. ${a}, ${b}`;
};

//Array, Object destructing(배열, 객체 비구조화)
const object = {
  text: '김',
  number: 1,
  english: 'abc',
};

let { text, number, english } = object;

const array = ['a', 'b', 'c', 'd'];

let [a, b, c] = array;
console.log(a);

//Import, Export (모듈 가져오기 내보내기)
export default function target(a, b) {
  return `${a},${b}`;
}
export default function target1(a, b) {
    return `${a},${b}`;
  }
  export default function target2(a, b) {
    return `${a},${b}`;
  }

import target from './ES6';
import {target1, target2} from './ES6'


//Promise 비동기
//Axios, Fetch는 비동기 함수로 Promise 객체를 반환

const promise = () => {
    return new Promise((resolve,reject) => {
        resolve('Fullfield')
    })

}
/*
 함수가 콜백큐에 등록되면 Pending
 함수가 (resolve)실행완료되면 Fullfield
 함수가 (reject)오류발생하면 Rejected
*/
const url = 'url'
const getData = (url) => {
    return fetch(url)
}
//Promise 객체를 받아 then체이닝을 통해 json => 사용할 수있는 데이터 로 가공
getData(url).then(data => data.json()).then(res => console.log(res))


//Rest parameter, Spread Operator (나머지 매개변수, 확산 연산자)

const arr = [1, 5,4,2,3, '나는', '비구조화','변수'];
const [ t, u, v, ...x] = arr;

const gkatn = (restparam) => {
    return restparam.filter((item) => {
        return item
    }).join('')
}

//Class 
/**
 * 이제 Prototype으로 작성해 OOP를 구현하지 않아도된다.
 * 
 * 새로운 객체지향 문법이 아닌 Prototype를 편리하게 쓰이기 위한 Syntactic Suger일뿐임
 * 
 * 
 * 쉽게말해 표기는 다른데 프로토타입의 컨셉을 유지함.
 */

//문법
class Object {
    constructor() {

    }
}

//(Original)
class CallOfDuty {
    constructor(version, name, model, ammo_box){
        this.version = version;
        this.name = name
        this.model = model
        this.ammo_box = ammo_box
    }

    use_props() {
        console.log("F")
    }
}

//new 연산자를 통해 실제 메모리에 저장되는 인스턴스를 생성가능
let COD_MW = new CallOfDuty(4, '모던워페어', 'PC')
let COD_WW = new CallOfDuty(3, 'World at War', 'Xbox')


//다른 클래스로 상속
class MedalOfHonor extends CallOfDuty{
    constructor(ammo_box) {
        super(ammo_box)
        this.name
    }
    logoPlay() {
        console.log(this.version)
    }
}

const Tier1 = new MedalOfHonor(5, '티어1', 'PS4');
//super은 상위 클래스를 호출할때 사용
Tier1.logoPlay();
