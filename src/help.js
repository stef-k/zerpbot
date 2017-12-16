/**
 * A help system providing few but useful links on how and where to buy XRP
 *
 * @class Help
 */
class Help {
  /**
   * Provides help text message and links
   *
   * @returns {string} Help message containing help text and links
   * @memberof Help
   */
  howTo() {
    return `  Check the following visual guides on where and how to buy XRP
  -------------------------------------------------------------------------
  **Where can I buy XRP?** You can buy XRP from the following exchanges:


  * Bitstamp (XRP/USD, EUR, BTC): https://www.bitstamp.com/
  * Kraken (XRP/BTC, EUR, USD): https://www.kraken.com/
  * GateHub (XRP/USD, JPY, CNY, EUR, BTC, ETH): https://gatehub.net/
  * CoinOne (XRP/KRW, BTC): https://coinone.co.kr/


For more check [this page](https://ripple.com/xrp/buy-xrp/) on **Ripple's official website**
  -------------------------------------------------------------------------
  **How to register and buy XRP**? You can check the following visual guides

  * How to for Bitstamp: https://ripple.com/xrp/how-to-buy-xrp-on-bitstamp/
  * How to for Kraken: https://ripple.com/xrp/how-to-buy-xrp-on-kraken/
  * How to for GateHub: https://ripple.com/xrp/how-to-buy-xrp-on-gatehub/`
  }

  /**
   * Provides basic but crucial info why to choose Ripple and XRP,
   * why XRP need to be priced more, some stats and the cost model.
   *
   * @returns {string} Quick info text on why to choose Riple and XRP
   * @memberof Help
   */
  why() {
    return `Why Ripple **and XRP**? Check the following quick info.

  The first 3 take 10 minutes to read and contain crucial info to support the decision to invest in XRP.
  -------------------------------------------------------------------------

  * [The idea about Ripple and why XRP will be useful and needs to be priced higher](https://www.xrpchat.com/topic/5280-valuation-models-xrp-the-digital-currency-vs-ripple-the-company/#comment-50182)
  * [Ten things about Ripple](https://ripple.com/insights/10-things-need-know-xrp/)
  * [XRP The Digital Asset for Payments](https://ripple.com/insights/xrp-digital-asset-payments/)

  -------------------------------------------------------------------------
  * [Market performance - Decentralization - XRP Supply](https://ripple.com/xrp/market-performance/)
  * [XPR: Cost Model PDF read](https://ripple.com/files/xrp_cost_model_paper.pdf)
  * [Ripple's vision PDF read](https://ripple.com/files/ripple_vision.pdf)
  * [XRP Charts](https://xrpcharts.ripple.com/#/)
  * [XRP Market Charts](https://xrpcharts.ripple.com/#/xrp-markets)

  -------------------------------------------------------------------------
  **Additional Info**


  * [**Wallet Fees**](https://ripple.com/build/reserves/): It is a mechanism to avoid spamming the network; as XRP grows in value, the fee will be reduced.
  * **Banks & XRP volatility**: Banks will be isolated from volatily as third party services will provide them with XRP in stable prices. Also read about [*The Incentive Accelerator* (second paragraph)](https://ripple.com/files/xrp_cost_model_paper.pdf)
  `
  }

  toString() {
    return `**zerpbot help:**
  --------------------------
  Available commands (copy paste the bold part):

  **+zerpbot price**  returns the price from Bitstamp and Coinmarketcap along with some extra info. Updates every 65 seconds.

  **+zerpbot howto**  returns useful links with guides where and how to buy XRP.

  **+zerpbot why**  returns crucial info about Ripple and XRP, useful for new investors.

  **+zerpbot help**  returns this help message.

  [zerpbot on Github](https://github.com/stef-k/zerpbot)
  `
  }
}

exports.Help = Help
