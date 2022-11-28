const { describe, it } = require("beartest-js");
const { add } = require("./index");
const assert = require("assert");

describe("add", () => {
  it("1 + 1 = 2", async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    assert.equal(add(1, 1), 2);
  });
});
