// Q. 타입을 주어야하는 경우와 주지 않아도 되는 경우를 구분하여 타입을 정의하세요

// let seongyong = {
//   age: 20,
//   height: 190,
// };

// function log(obj) {
//   console.log(obj.height);
//   return obj;
// }

// const a = log(seongyong);
// console.log(a.age);

// Answer =========================

type Person = {
  age: number;
  height: number;
};

const seongyong: Person = {
  age: 20,
  height: 190,
};

function log(obj: Person) {
  console.log(obj.height);
  return obj;
}

const a = log(seongyong);
console.log(a.age);
