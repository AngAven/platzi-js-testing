const Person = require('./06-person')
// AAA - Rule

describe('person test', () => {
  let person = new Person()

  beforeEach(() => { // Arrange - Given | Prepare instance for each test
    person = new Person('Angel', 45, 1.7)
  })

  test('should return down', () => {
    person.weight = 40
    const imc = person.calcIMC() // Act - when
    console.log(imc)
    expect(imc).toBe('down') // Assert - then
  })

  test('should return overweight level 2', () => {
    person.weight = 120
    person.height = 1.8
    const imc = person.calcIMC()
    console.log(imc)
    expect(imc).toBe('overweight level 2')
  })
})
