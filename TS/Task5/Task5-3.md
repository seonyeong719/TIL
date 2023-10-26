# 📚 type alias와 interface의 차이를 이해해보기

## type alias

```tsx
type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
```

## interface

```tsx
interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
```

---

<br/>
<br/>
<br/>
<br/>

## Type Alias와 Interface의 차이점?

> ### 1. 확장 가능성

- **Type Alias** : type은 기존 타입을 조합하여 새로운 타입을 만드는 데 좀 더 강력한 기능을 제공한다. 유니온과 인터섹션(&)등을 사용하여 타입을 결합할 수 있다.
- **interface** : interface는 상속이 가능하며, 다른 인터페이스를 extends 키워드를 사용하여 확장할 수 있다.

> ### 2. 순환 참조

- **Type Alias** : 순환 참조 시, 복잡한 타입 에러를 유발할 수 있다.
- **interface** : TypeScript는 순환 참조를 더 잘 다루는 경향이 있어, 상대적으로 더 안전하게 사용할 수 있다.

> ### 3. interface 🆚 union

- **Type Alias** : 인터섹션(&)을 사용하여 여러 타입을 결합할 수 있다.
- **interface** : 인터페이스는 유니온(|) 타입과 함께 사용될 때 모든 멤버가 공통된 속성을 가져야 하는데, Type Alias에는 이런 제한이 없다.

---

<br/>
<br/>
<br/>
<br/>

#### 🙋🏻‍♀️ 개인 의견

```
- 두 방법 모두 장점이 있으며, 프로젝트와 상황에 따라 다르게 선택할 것 같다.(컨벤션)
- 프로젝트에선 통일을 하는게 좋겠지만 확장이 가능하다는 점에서 나는 interface를 선택해서 사용할 것 같다.
```
