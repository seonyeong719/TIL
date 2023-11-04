export enum TodoEnum {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

export type TodoDataBase =
  | {
      type: TodoEnum.DAILY;
      content: string;
      title: string;
    }
  | {
      type: TodoEnum.WEEKLY;
      total: Date;
    }
  | {
      type: TodoEnum.MONTHLY;
      goal: string;
    };

export type TodoType<T extends TodoEnum = TodoEnum> = Extract<TodoDataBase, { type: T }>;

// 타입가드
export const DailyTodo = (todo: TodoDataBase): todo is TodoType<TodoEnum.DAILY> => {
  return todo.type === TodoEnum.DAILY;
};

export const WeeklyTodo = (todo: TodoDataBase): todo is TodoType<TodoEnum.WEEKLY> => {
  return todo.type === TodoEnum.WEEKLY;
};

export const MonthlyTodo = (todo: TodoDataBase): todo is TodoType<TodoEnum.MONTHLY> => {
  return todo.type === TodoEnum.MONTHLY;
};
