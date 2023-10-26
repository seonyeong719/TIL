# 🖐🏻 React에서 타입스크립트를 위해 지원하는 타입1 (React.FC)

> ## React.FC

### React.FC란?

- Function Component 타입의 줄임말로, React + Typescript 조합으로 개발할 때 사용하는 타입이다.
- 함수형 컴포넌트 사용 시 타입 선언에 쓸 수 있도록 React에서 제공하는 타입이다.

### React 18버전 이전까지 FC 사용을 지양했던 이유는?

> #### 1. children

- React.FC를 사용하면 컴포넌트 props는 type이 ReactNode인 children을 암시적으로 가지게 된다.

```tsx
type TagName = {
  name: string;
};

const Tag: React.FC<TagName> = ({ name }) => (
  <div>
    <div>{name}</div>
    {children}
  </div>
);
```

👉🏻 타입스크립트를 쓰는 이유중 하나가 정확한 타입을 지정 해주면서 JS코드의 안전성을 향상 시키는 부분인데, FC를 사용하면 컴포넌트에 children이 있을 수 있다는 것을 가정하여 언제든지 children의 타입 지정 없이 전달이 가능하기 때문에 타입이 명확하지 않다는 단점이 있다.

> #### 2. defaultProps

- defaultProps란 props의 default 값을 설정해주는 방법이다.
- 언어에서 전달 받는 매개변수의 default 값을 설정해주는 것과 비슷한 맥락이다.

```tsx
export const Hi: React.FC<HiProps> = ({ name }) => {
  return <h1>Hello {name}</h1>;
};

Hi.defaultProps = {
  name: "Park",
};

const App = () => (
  <>
    <Hi />
  </>
);
```

☝🏻 위의 코드를 실행하면 name에 Park이 들어오지 않는다.

> #### 3.코드의 길이가 길다

- React.FC를 사용하면 코드가 더 길다는 이유도 있다.

<br/>
<br/>

### 이제 다시 사용할 수 있는 이유?

> #### 1. React.FC 타입에 암묵적인 children 선언 제거

- 18버전 이전엔 React.FC를 사용하면 컴포넌트 props는 type이 ReactNode인 children을 암시적으로 가지게 되었으나, 타입에 자식 노드가 꼭 필요한 컴포넌트에 자식 노드를 넣지 않았을 경우 혹은 그 반대의 경우를 타입으로 잡아내지 못한다는 단점이 있다.

🖐🏻 그래서 암시적으로 선언되었던 children을 명시적으로 컴포넌트에 맞게 선언을 하자!! 로 바뀜.

```tsx
type TagName = {
  name: string;
  children: react.ReactNode;
};

const Tag: React.FC<TagName> = ({ name, children }) => (
  <div>
    <div>{name}</div>
    {children}
  </div>
);
```

> #### 2. ReactFragment 타입에서 {} 제거

- ReactFragment 타입에서 {} 객체가 제거됐다. 그동안 타입에서는 암묵적인 children 때문에 유지해왔는데 이번 변경으로 같이 제거됐다.

> #### 3. this.context는 이제 unknown 타입

- 만약 React.FC를 사용할 수 없는 환경이라면, 일반 함수 컴포넌트를 사용하면 된다.
- 기존 방식대로 Props 타입을 별도의 인터페이스를 정의하고 컴포넌트 함수를 작성하면 된다.

```tsx
interface Component {
  prop1: string;
  prop2: number;
}

function ComponentProps(props: Component) {
  // ...
}
```
