// src/server/trpc/router/index.ts
import { exampleRouter } from "./example";
import { t } from "../trpc";

export const appRouter = t.router({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
