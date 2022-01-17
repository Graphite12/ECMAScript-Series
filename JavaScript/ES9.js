/* ES9 (2018) */

//A. Rest / Spread Properties (객체 리터럴 전개)
/**
 * Object에서 전개 문법이 가능해짐!!!!!
 *
 * 기존 Rest(전개) 문법은 배열에서만 가능하지만, ES9에서 객체에서 사용가능하도록 추가됨!
 */

let obj1 = { too: 'too', x: 32, d: 'df' };
let obj2 = { too2: 'too2', y: 45, h: 'gg' };

let target = { ...obj1 }; //Object { too: 'too', x: 32, d: 'df' };
let target2 = { ...obj1, ...obj2 }; //Object {too: 'too', x: 32, d: 'df', too2: 'too2', y: 45, …};

//B. Promise.prototype.finally
/**
 * promise finally는 성공 여부에 상관없이 promise 객체를 반환한다.
 *
 * then, catch 성공여부와 실패여부에 대해선 반환하지만, ES9에선 finally를 추가했다.
 */
let isLoading = true;

fetch(myReq)
  .then((res) => {
    let content_type = res.headers.get('content-type');
    if (content_type && content_type.includes('application/json')) {
      return res.json();
    }
  })
  .then((data) => {
    /**
     * json further
     */
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    isLoading = false;
  });
