import Child2 from "../Components/child2";
import FamilyImg from "../Components/familyImg";
import GoodChild from "./goodChild";

function GoodParents() {
  return (
    <>
      <h2>좋은 예시</h2>
      <div style={{ color: "blue" }}>👵🏻둘째야 첫째 어디갔니~?</div>
      <GoodChild />
      <Child2 />
      <FamilyImg />
    </>
  );
}
export default GoodParents;

// state를 사용할 첫째를 컴포넌트로 따로 분리 해준 상태에서 import 해줌
