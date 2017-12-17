const expect = require('expect')
const Help = require('../src/help').Help


describe('it should return help messages', () => {
  let help

  before(() => {
    help = new Help()
  })

  it('should return a howto help text', () => {
    let msg = help.howTo()
    expect(msg).toEqual(expect.stringContaining('Check the following visual guides on where and how to buy XRP'))
  })

  it('should return a why help text', () => {
    let msg = help.why()
    expect(msg).toEqual(expect.stringContaining('The first 3 take 10 minutes to read and contain crucial info to support the decision to invest in XRP'))
  })

  it('should return zerpbot available commands', () => {
    let msg = help.toString()
    expect(msg).toEqual(expect.stringContaining('Available commands (copy paste the bold part)'))
  })
})
