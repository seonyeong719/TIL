# 💙 Enum과 as const의 차이? import type을 해야하는 이유?

## 1. enum과 as const의 차이는 무엇일까? (트리쉐이킹과 번들 사이즈 관점에서 알아보기)

- Typescript에서 가독성을 높이기 위한 일환으로 서로 연관된 상수들을 하나의 namespace에 묶어 관리할 때, **enum**키워드를 사용해 Enum type을 선언하거나 객체 리터럴에 **as const**라는 type assertion을 사용한다.

```
두 경우 모두 IDE의 자동완성 기능을 활용할 수 있고, 객체의 프로퍼티들이 모두 readonly로 다뤄지기 때문에 변경의 우려도 없다.
```

  <br/>
  <br/>

### 애초에 목적이 다름

- **enum** : enum은 다른 언어의 Enumeration 문법처럼 서로 연관된 상수들을 하나의 namespace로 묶어 추상화 시키기 위해 도입된 것이다. <br/>
  👉🏻 이를 통해 코드만 보더라도 의도를 명확히 알 수 있어 가독성을 높일 수 있음

- **as const** : as const는 type assertion의 한 종류로써 리터럴 타입의 추론 범위를 줄이고 값의 재할당을 막기위한 목적으로 만들어졌다.
