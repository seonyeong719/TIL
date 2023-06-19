import { useState } from "react";
import ChildComponent from "./child";

function Parent() {
  const [value, setValue] = useState("1 2 3 4 5에서");

  const handleChangeValue = () => {
    setValue("1 2 3 4 5 6 7 8 9 10까지!");
  };

  return (
    <div>
      <div>숫자 {value}</div>
      <ChildComponent changeBtn={handleChangeValue} />
    </div>
  );
}
export default Parent;
