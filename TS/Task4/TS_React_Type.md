# 🖐🏻 React에서 타입스크립트를 위해 지원하는 타입2

> ## ReactNode

- ReactNode는 TypeScript에서 React 컴포넌트에서 반환될 수 있는 모든 종류의 노드(node)를 나타내는 타입이다.
- React 컴포넌트의 렌더링 결과로 **JSX요소, string, number, array, boolean, null, undefined** 등이 포함될 수 있는데, 이러한 모든 데이터 타입을 대표하는 것이 ReactNode이다.
- ReactNode는 children 속성의 타입으로 가장 많이 사용하는 타입이다.

```tsx
import React, { ReactNode } from "react";

interface Component {
  children: ReactNode;
}

const ComponentProps: React.FC<Component> = ({ children }) => {
  return <div>{children}</div>;
};
```

☝🏻 이렇게 하면 Component 컴포넌트는 어떠한 종류의 자식 노드든 받아들일 수 있다.

> ## ReactElement

- ReactElement는 React 컴포넌트를 나타내는 타입이다. ReactElement 타입은 JSX 요소가 렌더링될 때 생성되며, 컴포넌트의 인스턴스를 나태낸다.
- 이 타입을 사용하여 **React 컴포넌트와 JSX 요소의 타입을 정의하고 다룰 수 있다.**

```tsx
interface Component {
  text: string;
}

const ComponentProps: React.FC<Component> = ({ text }) => {
  return <div>{text}</div>;
};

const element: React.ReactElement = <ComponentProps text="Hi~" />;
```

👉🏻 ReactElement를 사용하여 컴포넌트의 타입을 정의하거나, 컴포넌트에 속성을 전달할 때 JSX 요소로 감싸서 생성할 수 있다.

> ## PropsWithChildren

- PropsWithRef는 React의 forwardRef와 함께 사용되는 타입으로, ref 속성을 전달받을 수 있는 컴포넌트의 프로퍼티 타입을 나타낸다.

👇🏻 아래의 예시에서는 ButtonProps가 ref를 포함하고 있으며, Button 컴포넌트에서 forwardRef를 사용하여 ref를 관리한다.

```tsx
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren<{}> {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
```

> ## PropsWithRef

- PropsWithRef는 React의 forwardRef와 함께 사용되는 타입으로, ref 속성을 전달받을 수 있는 컴포넌트의 프로퍼티 타입을 나타낸다.

👇🏻 아래의 예시에서는 ButtonProps가 ref를 포함함고 있으며, Button 컴포넌트에서 forwardRef를 사용하여 ref를 관리한다.

```tsx
import { PropsWithRef, forwardRef } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button ref={ref} onClick={props.onClick}>
      {props.label}
    </button>
  );
});

function App() {
  const buttonRef = React.createRef<HTMLButtonElement>();

  const handleButtonClick = () => {
    if (buttonRef.current) {
      buttonRef.current.innerText = "클릭!";
    }
  };

  return (
    <div>
      <Button ref={buttonRef} onClick={handleButtonClick} label="여기 클릭" />
    </div>
  );
}

export default App;
```

> ## RefObject

- RefObject는 React에서 DOM 엘리먼트나 컴포넌트에 접근하기 위해 사용되는 객체이다.
- useRef를 사용하여 생성되며, 위릐 얘시에서는 inputRef를 생성하여 input 엘리먼트에 접근하고, 버튼을 클릭하여 해당 input 엘리먼트에 포커스를 줄 수 있다.

```tsx
import { useRef } from "react";

function TextInput() {
  const inputRef = (useRef < HTMLInputElement) | (null > null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <TextInput />
    </div>
  );
}

export default App;
```

> ## SetStateAction

- SetStateAction은 useState훅에서 상태를 업데이트할 때 사용되는 콜백 함수의 타입이다.

👇🏻 아래의 예시에서는 setCount 함수의 인자로 (prev) => prev + 1 형태의 콜백 함수를 사용하여 상태를 업데이트하고 있다.

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```

> ## Dispatch

- 타입스크립트에서 Dispatch는 리덕스(Redux)나 다른 상태 관리 라이브러리에서 사용되는 액션을 디스패치(dispatch)하는 함수의 타입을 나타낸다.
- 주로 리덕스 스토어의 dispatch 메서드의 타입으로 사용되며, 상태를 변경하고 애플리케이션의 동작을 제어하는 데 사용된다.

```tsx
import { createStore, Dispatch } from "redux";

// 액션 타입 정의
enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

// 액션 생성자 함수 정의
interface IncrementAction {
  type: ActionType.INCREMENT;
}

interface DecrementAction {
  type: ActionType.DECREMENT;
}

type Action = IncrementAction | DecrementAction;

// 초기 상태와 리듀서 정의
interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0,
};

function counterReducer(state: AppState = initialState, action: Action): AppState {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(counterReducer);

// Dispatch 함수 타입
type AppDispatch = Dispatch<Action>;

// 액션 디스패치 예시
const incrementAction: IncrementAction = { type: ActionType.INCREMENT };
const decrementAction: DecrementAction = { type: ActionType.DECREMENT };

store.dispatch(incrementAction); // 카운트 증가
store.dispatch(decrementAction); // 카운트 감소
```

🖐🏻 Dispatch는 redux 패키지에서 import한 것이다.
🖐🏻 Action은 리덕스 액션의 타입을 정의하는 유니온 타입이다.
🖐🏻 AppDispatch는 "Dispatch<Action>"을 나타내며, 이를 사용하여 리덕스 스토어의 액션을 디스패치 할 수 있다.

```
💡 store.dispatch()를 호출하여 액션을 디스패치하면 리듀서가 호출되어 상태가 업데이트된다.
❗️ 이를 통해 애플리케이션의 상태관리와 동작을 제어할 수 있다.
```
