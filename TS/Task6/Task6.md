# 💙 타입스크립트에서 꼭 필요한 ts-config

<br/>

## 1. tsconfig의 역할은 무엇인가?

- tsconfig.json은 타입스크립트를 ➡️ 자바스크립트로 변환 시키는 컴파일 설정을 한번에 정의 해놓는 파일이라고 보면 된다!

```
💡 프로젝트를 컴파일 하는데 필요한 루트 파일, 컴파일러 옵션 등을 상세히 설정할 수 있다!
```

- tsconfig에서 옵션들을 미리 정의해 놓으면, 그 후로는 컴파일 할때 명령어에 일일히 대상 파일이나 옵션을 지정하지 않아도 된다.
  그래서 tsc 나 ts-node 명령어를 그냥 실행하게 되면, 현재 폴더에 있는 tsconfig 설정을 기준으로 프로젝트에서 소스들을 변환 작업(컴파일)을 진행하게 되는데, 만약 현재 폴더에 tsconfig 설정 파일이 없다면 프로젝트 폴더 내에서 상위 폴더의 경로를 검색해 나간다.

<br/>
<br/>

## 2. tsconfig는 어디 까지의 역할을 할 수 있을까?

- tsconfig는 다양한 역할을 수행할 수 있다.

<br/>
<br/>

> ### 1. 컴파일러 옵션 설정

- compilerOptions 속성을 사용하여 TypeScript 컴파일러에 적용할 옵션을 설정한다.<br/>
  👉🏻 이 옵션들은 프로젝트의 컴파일 결과물 및 동작에 큰 영향을 미친다.

<br/>

> ### 2. 타입 체크 및 검증

- tsconfig 파일을 통해 타입 검사 옵션을 설정하여 프로젝트의 타입 안정성을 유지하고 개선할 수 있다.<br/> 👉🏻 이는 개발 중에 런타임 오류를 줄이고 코드의 신뢰성을 높이는 데 도움이 된다.

<br/>

> ### 3. 파일 구성 관리

- include 및 exclude 속성을 사용하여 컴파일 대상 파일 및 베외할 파일을 정의한다.<br/>
  이를 통해 프로젝트 내에서 어떤 파일이 컴파일되어야 하고 어떤 파일은 무시되어야 하는지를 제어할 수 있다.

<br/>

> ### 4. 환경 설정

- 프로젝트의 환경에 따라 컴파일 동작을 조정할 수 있다.<br/>
  👉🏻 ex) 개발 환경과 프로던션 환경 간에 다른 옵션을 설정하여 최적화된 컴파일을 수행할 수 있다.

<br/>

> ### 5. 프로젝트 구조 관리

- tsconfig 파일 내에서 파일 경로 패턴을 사용하여 특정 파일을 컴파일 대상으로 포함하거나 제외시킬 수 있다.<br/> 👉🏻 이를 통해 프로젝트의 파일 구성을 체계적으로 관리할 수 있다.

<br/>
<br/>

## 3. tsconfig에서의 주요 옵션

- **tsconfig의 전역 속성**

  - 전역 속성이란? 파일의 최상위에 위치하고 있는 속성들을 일컫는다.

  <br/>

🖐🏻 많은 속성들이 있지만 이중에서 주로 쓰이는 다섯가지 속성을 알아보겠다!

  <br/>

> ### compilerOption

- 컴파일 대상 파일들을 어떻게 변환할지 세세히 정하는 옵션이다. <br/>
  👉🏻 아주 많은 옵션들이 있는데, 이들 중 애용되는 옵션들은 밑에서 더 자세히 설명하겠다.

<br/>

> ### files

- files는 프로젝트에서 컴파일 할 파일들의 목록을 명시적으로 지정하는 속성이다.
- files 속성은 exclude보다 우선순위가 높다. ❗️만약 이 속성이 생략되면 include 와 exclude 속성으로 컴파일 대상을 결정한다.

<br/>

> ### extends

- extends는 다른 tsconfig.json 파일의 설정들을 가져와 재사용할 수 있게 해주는 옵션이다.
- 보통 extends 속성은 tsconfig.json 파일의 최상위에 위치한다. <br/>
  👉🏻 ex) config/base.json 파일의 속성 설정을 현 tsconfig.json 파일에 포맷이 맞으면 base파일의 설정을 상속 받게 된다.

<br/>

> ### include

- include 속성은 files 속성과 같이 프로젝트에서 컴파일할 파일들을 지정하는 속성이지만, \*와일드 카드 패턴으로 지정한다는 점에서 차이가 있다.
- include는 files 속성과는 달리 exclude보다 약해 include에 명시되어 있어도 exclude에도 명시되어 있으면 제외된다.

```
* 와일드 카드 패턴 : tsconfig.json 파일에서 include나 exclude 속성에 사용할 수 있는 파일이나 디렉토리를 그룹화하여 일치시키는 기호라고 보면 됨.

* : 해당 디렉토리에 있는 모든 파일
? : 해당 디렉토리에 있는 파일들의 이름 중 한 글자라도 포함하면 해당
** : 해당 디렉토리의 하위 디렉토리의 모든 파일을 포함
```

<br/>

> ### exclude

- exclude 속성은 프로젝트에서 컴파일 대상에서 제외할 파일들을 와일드 카드 패턴으로 지정하는 속성이다. <br/>
  👉🏻 즉, include의 반대 버전이라 보면 된다.

<br/>
<br/>

## compilerOptions의 옵션들

- 옵션에는 굉장히 종류가 많은데, 이들을 하나씩 모두 익힐 필요는 없다.<br/>
  이 중에서 유용한 옵션을 위주로 모아 정리하겠다.

> ### target

- 어떠한 버전의 JS코드로 컴파일 할지 지정한다.

```
❓만약 코드가 구식의 환경에서 배포되다면?
👉🏻 더 낮은 버전을 지정해야 한다.

❓신식의 환경에서만 배포된다는 보장이 있다면?
👉🏻 더 높은 타겟으로 지정해도 된다. (Javascript 버전 지정 값을 넣지 않으면 default로 es5로 컴파일 된다.)
```

<br/>
<br/>

```tsx
"compilerOptions": {
	"target": "ES6" // 어떤 버전의 자바스크립트로 컴파일 될 것인지 설정
    // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
}
```

<br/>
<br/>

```
❗️유의사항
타입스크립트 소스 코드에 Promise 코드가 있을 경우, 이는 ES5에서 지원해주지 않는다.❌
그래서 타입스크립트를 컴파일 하면 오류가 발생하니 이부분 유의해야 함!
```

```
⚠️ 주의사항
target 프로퍼티 값 중에 ESNext 옵션값이 있는데, 가장 최신 기능의 자바스크립트 버전을 가리키는 값이다.
이 설정은 주의 깊게 사용되어야 한다!
👉🏻 이유는 현재 TypeScript의 버전에 따라 ESNext가 가리키는 버전이 달라질 수 있기 때문이다.
```

> ### module

- 컴파일된 JavaScript 파일의 출력 디렉토리를 지정한다.<br/>
  기본적으로 컴파일을 진행하면 .ts와 같은 경로에 .js 결과물을 생성하는데, outDir 옵션으로 경로를 수정하여 컴파일된 js 파일들을 담을 폴더를 지정해줄 수 있다.

```tsx
"compilerOptions": {
	"outDir": "./dist"
}

```

<br/>
<br/>

> ### outDir

- 컴파일된 JavaScript 파일의 출력 디렉토리를 지정한다.<br/>
  기본적으로 컴파일을 진행하면 .ts와 같은 경로에 .js 결과물을 생성하는데, outDir 옵션으로 경로를 수정하여 컴파일된 js 파일들을 담을 폴더를 지정해줄 수 있다.

  ```tsx
  "compilerOptions": {
  	"outDir": "./dist"
  }
  ```

<br/>
<br/>

> ### strict

- 타입스크립트의 각종 타입 체킹 동작을 전부 활성화한다.<br/>
  ❗️사실상 이 옵션을 쓰지않는것은 곧 타입스크립트를 쓰지 않는 다는 것과 같다.
  그래서 기본으로 활성화 되어있다!

  ```tsx
  "compilerOptions": {
    "strict": true /* 모든 엄격한 유형 검사 옵션 활성화 */
  }
  ```

  => 이 프로퍼티를 true로 지정하면 strict mode family 프로퍼티들을 전부 true로 지정하는 것과 동일하다.

<br/>
<br/>

> ### noEmit

- TypeScript를 컴파일하면, JavaScript 변환 파일을 만들어 내지 않도록 하는 설정이다.<br/>
  🖐🏻 이는 타입스크립트를 에디터 통합 기능을 제공하기 위한 도구 또는 소스 코드 타입 체커로만 사용하게 되는 꼴이다.

```tsx
    "compilerOptions": {
        "noEmit": true,
    }
```
