import { HttpResponse, http } from "msw";

// 괄호 안은 param 같다.
export const handlers = [
  http.get("/user", () => {
    return HttpResponse.json({
      id: "abc-123",
      name: "John",
      number: "010-0000-0000",
    });
  }),
];
