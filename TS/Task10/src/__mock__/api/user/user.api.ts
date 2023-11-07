import { HttpResponse, http } from "msw";
import { userMock } from "../../data/user.data";

interface LoginBody {
  name: string;
}

interface LoginResponse {
  id: number;
  name: string;
  number: string;
}

// Post
export const addList = http.post<LoginBody, LoginResponse>("/user", async (req, res, ctx) => {
  let name;
  let number;

  userMock.push(req.body);

  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 100000),
      name,
      number,
      state: false,
    })
  );
});

// Get
export const readList = http.get<LoginBody, LoginResponse>("/user", () =>
  HttpResponse.json({ id: "abc-123" })
);
