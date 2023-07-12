import Select from "./Components/Select/Select";
import { age } from "./list";

function Ddd() {
  return (
    <>
      <Select>
        {age.map((el) => (
          <option>{el}</option>
        ))}
      </Select>
    </>
  );
}
export default Ddd;
