const { describe, it } = require("beartest-js");
const { multiply } = require("./index");
const assert = require("assert");

describe("multiply", () => {
  it("3 * 3 = 9", async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    assert.equal(multiply(3, 3), 9);
  });
});
