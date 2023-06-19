import { useState } from "react";
import Child1 from "../Components/child1";

function GoodChild() {
  const [call, setCall] = useState(false);

  return (
    <>
      <button onClick={() => setCall(true)}>첫째 부르기</button>
      {call && <Child1 />}
    </>
  );
}
export default GoodChild;
