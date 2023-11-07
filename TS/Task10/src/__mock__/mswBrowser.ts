import { setupWorker } from "msw/browser";
// import { handlers } from "./msw/handlers";
import { handler } from "./api/handler";

export const worker = setupWorker(...handler);
