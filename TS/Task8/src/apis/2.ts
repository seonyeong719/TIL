import { TodoEnum, TodoType } from "@type/todo";
import axios from "axios";

export const TodoApi = {
  async getTodo<T extends TodoEnum>(): Promise<TodoType<T>> {
    const res = await axios.get<TodoType<T>>("/");
    return res.data;
  },
};
