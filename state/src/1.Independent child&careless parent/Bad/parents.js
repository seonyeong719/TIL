import { useState } from "react";
import Child1 from "../Components/child1";
import Child2 from "../Components/child2";
import FamilyImg from "../Components/familyImg";

function BadParents() {
  const [call, setCall] = useState(false);
  return (
    <>
      <h2>나쁜 예시</h2>
      <div style={{ color: "blue" }}>👵🏻둘째야 첫째 어디갔니~?</div>
      <button onClick={() => setCall(true)}>첫째 부르기</button>
      {call && <Child1 />}
      <Child2 />
      <FamilyImg />
    </>
  );
}
export default BadParents;

// 부모 컴포넌트 안에서 첫째에게 state 선언
