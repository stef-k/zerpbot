const {Price} = require('./price')
const {Help} = require('./help')

/**
 * Handles the incomming comments as parsed from Reddit
 *
 * @class Handler
 */
class Handler {
  /**
   * Creates an instance of Handler.
   * @memberof Handler
   */
  constructor() {
    this.price = new Price()
    this.help = new Help()
  }
  /**
   * Handles the incoming comment objects
   * @param {Object} commentStream the parsed comments object
   */
  handle(commentStream) {
    let body = commentStream.body
    if (body.startsWith('+zerpbot ')) {
      body = body.replace('+zerpbot ', '')
      if(body.includes('price')) {
        commentStream.reply(this.price.toString())
      } else if (body.includes('how to buy') || body.includes('where to buy') || body.includes('howto')) {
        commentStream.reply(this.help.howTo())
      } else if (body.includes('help')) {
        commentStream.reply(this.help.toString())
      } else if (body.includes('why')) {
        commentStream.reply(this.help.why())
      }
    }
  }
}

exports.Handler = Handler
