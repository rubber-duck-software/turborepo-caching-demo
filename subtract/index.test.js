const { describe, it } = require("beartest-js");
const { subtract } = require("./index");
const assert = require("assert");

describe("subtract", () => {
  it("3 - 1 = 2", async () => {
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    assert.equal(subtract(3, 1), 2);
  });
});
