import { TodoDataBase } from "@type/todo";
import OneTodo from "./components/one-todo";

const Q1Component: React.FC<{ oneTodo: TodoDataBase[] }> = ({ oneTodo }) => {
  return (
    <div>
      {oneTodo.map((todo, idx) => (
        <OneTodo key={idx} todo={todo} />
      ))}
    </div>
  );
};
export default Q1Component;
