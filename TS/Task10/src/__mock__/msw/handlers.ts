import { HttpResponse, http } from "msw";

// 괄호 안은 param 같다.
export const handlers = [
  http.get("/login", () => {
    return HttpResponse.json({
      id: "abc-123",
      password: "1234",
    });
  }),
];
