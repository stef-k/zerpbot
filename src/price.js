const axios = require('axios')
const humanize = require('humanize')
const moment = require('moment-timezone')

/**
 * Fetches XRP price and some stats from various services
 *
 * @class PriceBot
 */
class Price {
  /**
   * Creates an instance of Price.
   * @memberof Price
   */
  constructor() {
    this.axios = axios
    let updatedAt = this._dateTimeStamp()
    this.price = {
      bitstampLast: null,
      bitstampHigh: null,
      bitstampLow: null,
      bitstampBid: null,
      bitstampAsk: null,
      bitstampOpen: null,
      bitstampVolume: null,
      coinmarketcapRank: null,
      coinmarketcapUsd: null,
      coinmarketcapBtc: null,
      coinmarketcapVolume: null,
      coinmarketcapSupply: null,
      updated: `[**London** ${updatedAt.london.format('MMM-DD-YYYY, HH:mm:ss Zz')}] [**New York** ${updatedAt.newYork.format('MMM-DD-YYYY, HH:mm:ss Zz')}]

[**Tokyo & Seoul** ${updatedAt.tokyo.format('MMM-DD-YYYY, HH:mm:ss Zz')}] [**Hong Kong** ${updatedAt.hongKong.format('MMM-DD-YYYY, HH:mm:ss Zz')}]`
    }
    this.bitstamp = 'https://www.bitstamp.net/api/v2/ticker/xrpusd/'
    this.coinmarketcap = 'https://api.coinmarketcap.com/v1/ticker/ripple/'
    this._fetchPrice();
    setInterval(() => {
      this._fetchPrice()
    }, 60500)
  }

  _dateTimeStamp() {
    let london = moment.tz(Date.now(), 'Europe/London')
    let newYork = london.clone().tz('America/New_York')
    let tokyo = london.clone().tz('Asia/Tokyo')
    let hongKong = london.clone().tz('Asia/Hong_Kong')
    return {
      london: london,
      newYork: newYork,
      tokyo: tokyo,
      hongKong: hongKong
    }
  }

  _fetchPrice() {
    axios.get(this.bitstamp).then((ticker) => {
      let updatedAt = this._dateTimeStamp()
      this.price.bitstampLast = ticker.data.last
      this.price.bitstampHigh = ticker.data.high
      this.price.bitstampLow = ticker.data.low
      this.price.bitstampBid = ticker.data.bid
      this.price.bitstampAsk = ticker.data.ask
      this.price.bitstampOpen = ticker.data.open
      this.price.bitstampVolume = ticker.data.volume
      this.price.updated = `[**London** ${updatedAt.london.format('MMM-DD-YYYY, HH:mm:ss Zz')}] [**New York** ${updatedAt.newYork.format('MMM-DD-YYYY, HH:mm:ss Zz')}]

[**Tokyo & Seoul** ${updatedAt.tokyo.format('MMM-DD-YYYY, HH:mm:ss Zz')}] [**Hong Kong** ${updatedAt.hongKong.format('MMM-DD-YYYY, HH:mm:ss Zz')}]`
    }).catch((e) => {
      console.log('Could not fetch the price from Bitstamp', e)
    })
    axios.get(this.coinmarketcap).then((ticker) => {
      this.price.coinmarketcapUsd = ticker.data[0].price_usd
      this.price.coinmarketcapBtc = ticker.data[0].price_btc
      this.price.coinmarketcapRank = ticker.data[0].rank
      this.price.coinmarketcapVolume = ticker.data[0]['24h_volume_usd']
      this.price.coinmarketcapSupply = ticker.data[0].available_supply
    }).catch((e) => {
      console.log('Could not fetch the price from Coinmarketcap', e)
    })
  }

  _toHumanReadable(price) {
    return humanize.numberFormat(price, 0)
  }

  /**
   * Returns the string representation of the price object
   *
   * @returns {string} Price and useful related stats
   * @memberof PriceBot
   */
  toString() {
    return `**Price updated at**:

${this.price.updated}

    Bitstamp XRP/USD:\t\t$${this.price.bitstampLast}
    Bistamp High:\t\t\t$${this.price.bitstampHigh}
    Bistamp Low:\t\t\t$${ this.price.bitstampLow}
    Bistamp Bid:\t\t\t$${ this.price.bitstampBid}
    Bistamp Ask:\t\t\t$${ this.price.bitstampAsk}
    Bistamp Open:\t\t\t$${ this.price.bitstampOpen}
    Bistamp 24h Volume:\t\t${ this._toHumanReadable(this.price.bitstampVolume) } XRP

--------------------------------------------

    Coinmarketcap XRP/USD:\t\t$${this.price.coinmarketcapUsd}
    Coinmarketcap XRP/BTC:\t\t${this.price.coinmarketcapBtc} XBT
    Coinmarketcap Rank:\t\t\t${this.price.coinmarketcapRank}
    Coinmarketcap 24h Volume:\t${this._toHumanReadable(this.price.coinmarketcapVolume)} XRP
    Coinmarketcap Supply:\t\t${ this._toHumanReadable(this.price.coinmarketcapSupply)} XRP avail.`
  }
}

exports.Price = Price
