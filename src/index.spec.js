const spiderManNames = require('.')

describe('spiderManNames module', () => {
  it('has a list of all available names', () => {
    expect(isArray(spiderManNames.all)).toBe(true)
    expect(isArrayOfStrings(spiderManNames.all)).toBe(true)
  })

  it('allows to get a random name from the list', () => {
    expect(spiderManNames.all).toContain(spiderManNames.random())
  })
})

function isArray(arr) {
  return Array.isArray(arr)
}

function isString(str) {
  return typeof str == 'string'
}

function isArrayOfStrings(arr) {
  return arr.every(isString)
}
