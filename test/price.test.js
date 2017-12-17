const expect = require('expect')
const Price = require('../src/price').Price

describe('test price check from Bitstamp and Coinmarketcap and last updated date and time', () => {
  let price, msg

  before(() => {
    price = new Price()
    msg = price.toString()
  })

  it('should return text', () => {
    expect(msg).toEqual(expect.stringContaining('Price updated at'))
  })

  it('sould return the last updated date and time', () => {
    expect(msg).toEqual(expect.stringMatching(/\d{2}:\d{2}:\d{2}/))
  })

})
