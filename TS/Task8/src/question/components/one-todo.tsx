import { DailyTodo, MonthlyTodo, TodoDataBase, WeeklyTodo } from "@type/todo";

const OneTodo: React.FC<{ todo: TodoDataBase }> = ({ todo }) => {
  if (DailyTodo(todo)) {
    return (
      <>
        <div> {todo.title}</div>
        <div>{todo.content}</div>
      </>
    );
  }
  if (WeeklyTodo(todo)) {
    return (
      <>
        <div> {todo.total.toString()}</div>
      </>
    );
  }
  if (MonthlyTodo(todo)) {
    return (
      <>
        <div> {todo.goal}</div>
      </>
    );
  }
};
export default OneTodo;
