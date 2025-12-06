import { expect, describe, test } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import request from "supertest";

import { app } from "./index";

export const server = setupServer();

server.listen();

describe("/", () => {
  test("with", async () => {
    server.use(
      http.get("https://httpbun.com/get", () => {
        return HttpResponse.json({
          id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
          firstName: "John",
        });
      }),
    );

    const res = await request(app).get("/").expect(200);
    expect(res.body).toStrictEqual({
      firstName: "John",
      id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
    });
  });
});
