test('obj', () => {
  const data = { name: 'angel'}
  data.lastName = 'avendaño'
  expect(data).toEqual({name: 'angel', lastName: 'avendaño'})
})

test('null', () => {
  const data = null
  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('booleans', () => {
  expect(true).toEqual(true)
  expect(false).toEqual(false)

  expect(0).toBeFalsy()
  expect(false).toBeFalsy()
})

test('strings', () => {
  expect('Angel Avendañostop').toMatch(/stop/)
})


test('list | array', () => {
  const numbers = [1, 2, 3, 4, 5]
  expect(numbers).toContain(3)
})
