const {sum, multiply, divide} = require('./02-math')

test("adds 1 + 3 should be 4", () => {
  const answer = sum(1, 4)
  expect(answer).toBe(5)
})

test("multiply 2 * 2 should be 4)", () => {
  const answer = multiply(2, 2)
  expect(answer).toBe(4)
})

test("divide 10 / 2 should be 5", () => {
  const answer = divide(10, 2)
  expect(answer).toBe(5)
})

test("divide by zero should be null", () => {
  const answer = divide(100, 0)
  expect(answer).toBeNull()
})
