describe('group 1', () => {
  beforeAll(() => {
    console.log('before all - g1 - up data base')
    // up db
  })

  afterAll(() => {
    console.log('after all - g2 - down data base')
    // down db
  })

  beforeEach(() => {
    console.log('| before each test |')
  })

  afterEach(() => {
    console.log('| after each test |')
  })

  test('case 1', () => {
    console.log('* g1 - case 1')
    expect(1 + 1).toBe(2);
  })

  test('case 2', () => {
    console.log('* g1 - case 2')
    expect(1 + 3).toBe(4);
  })
})

describe('group 2', () => {
  beforeAll(() => {
    console.log('before all - g2')
  })

  test('case 1', () => {
    console.log('** g2 - case 1')
    expect(1 + 1).toBe(2);
  })

  test('case 2', () => {
    console.log('** g2 - case 2')
  })
})
