import { TodoType } from "..";

const OneTodo = ({ todo }: { todo: TodoType }) => {
  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
      <div
        style={{
          color: todo.state ? "green" : "red",
        }}
      >
        {todo.state ? "Done" : "Not Done"}
      </div>
    </>
  );
};
export default OneTodo;
