import dummy from "../src/index";

describe("First spec", () => {
  it("does nothing", () => {
    expect(1).toEqual(1);
  });

  it("gets dummy from src/index", () => {
    expect(dummy()).toEqual("dummy");
  });
});
