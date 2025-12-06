import { expect, describe, test } from "vitest";
import request from "supertest";

import { app } from "./index";

describe("/", () => {
  test("without mocking", async () => {
    const res = await request(app).get("/").expect(200);
    expect(res.body).toEqual(expect.objectContaining({
      args: {},
      data: "",
      files: {},
      form: {},
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "br, gzip, deflate",
        "Accept-Language": "*",
        Host: "httpbun.com",
        "Sec-Fetch-Mode": "cors",
        "User-Agent": "node",
        Via: "1.1 Caddy",
      },
      json: null,
      method: "GET",
      url: "https://httpbun.com/get",
    }));
  });
});
