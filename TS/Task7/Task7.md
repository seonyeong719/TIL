# 💙 타입이 확실하지 않은 상황에서 안정적인 환경 만들기

<br/>

## 1. 객체의 특정 키로 검사하기

```tsx
interface Car {
  make: string;
  model?: string;
  year?: number;
}

function isCarWithModel(car: Car) {
  return "model" in car;
}

function isCarWithYear(car: Car) {
  return "year" in car;
}

const car1: Car = { make: "Toyota" };
const car2: Car = { make: "Honda", model: "Civic" };

if (isCarWithModel(car1)) {
  // 이 블록 안에서 car1은 model 속성을 가진 Car 타입으로 추론됨.
  console.log(car1.model); // OK
} else {
  // 이 블록 안에서 car1은 model 속성이 없는 Car 타입으로 추론됨.
  console.log(car1.model); // 에러: 'model' 속성에 접근할 수 없음
}

if (isCarWithYear(car2)) {
  // 이 블록 안에서 car2는 year 속성을 가진 Car 타입으로 추론됨.
  console.log(car2.year); // OK
} else {
  // 이 블록 안에서 car2는 year 속성이 없는 Car 타입으로 추론됨.
  console.log(car2.year); // 에러: 'year' 속성에 접근할 수 없음
}
```

<br/>
<br/>

## 2. 특정 값의 타입으로 검사하기

```tsx
function logValue(value: string | number) {
  if (typeof value === "string") {
    // value가 문자열일 때, 여기서 value의 타입은 자동으로 string으로 추론됨.
    console.log(value.toUpperCase());
  } else {
    // value가 숫자일 때, 여기서 value의 타입은 자동으로 number로 추론됨.
    console.log(value.toFixed(2));
  }
}
```

<br/>
<br/>

## 3. 가드문 함수를 만들어서 검사하기

```tsx
// 사용자 정의 타입 가드 함수
function isString(value: string | number) {
  return typeof value === "string";
}

function logValue(value: string | number) {
  if (isString(value)) {
    // isString 함수가 true를 반환할 때, value의 타입은 string으로 추론됨.
    console.log(value.toUpperCase());
  } else {
    // value가 숫자일 때, value의 타입은 number로 추론됨.
    console.log(value.toFixed(2));
  }
}
```
