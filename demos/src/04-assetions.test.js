test('test obj', () => {
  const data  = { name: 'angel'}
  data.lastName = 'avendaño'
  expect(data).toEqual({name: 'angel', lastName: 'avendaño'})
})
