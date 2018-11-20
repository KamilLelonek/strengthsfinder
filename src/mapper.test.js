const {map} = require('./mapper')

describe('map', () => {
  test('should not map any keys', () => {
    const row = {}

    expect(map(row)).toEqual({})
  })

  test('should not map unknown keys', () => {
    const row = {unknown: 'key', odd: 'value'}

    expect(map(row)).toEqual({})
  })

  test('should not map empty keys', () => {
    const row = {_dkvya: '', known: ''}

    expect(map(row)).toEqual({})
  })

  test('should map known keys', () => {
    const row = {_dkvya: 1, _d88ul: 34}

    expect(map(row)).toEqual({harmony: 1, empathy: 34})
  })
})
