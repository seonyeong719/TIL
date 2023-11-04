import { TodoEnum } from "@type/todo";
import axios from "axios";

interface DailyData {
  type: TodoEnum.DAILY;
  content: string;
  title: string;
}
interface WeeklyData {
  type: TodoEnum.WEEKLY;
  total: Date;
}
interface MonthlyData {
  type: TodoEnum.MONTHLY;
  goal: string;
}

export const TodoApi = {
  async getTodo() {
    const res = await axios.get<DailyData | WeeklyData | MonthlyData>("/");
    return res.data;
  },
};
