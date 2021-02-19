import pickRandomPopsicleId from "./pickRandomPopsicleId";

test("pickRandomPopsicle returns an element from array", () => {
  const array = [1, 2, 3];
  expect(typeof pickRandomPopsicleId(array)).toBe("number");
});
