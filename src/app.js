const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname + '/../.env')
})
const Snoowrap = require('snoowrap')
const Snoostorm = require('snoostorm')

const {Handler} = require('./handler')

const r = new Snoowrap({
  userAgent: 'A helper bot for /r/Ripple',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
})
const client = new Snoostorm(r)

const streamOpts = {
  subreddit: 'zerpbot',
  results: 25
}

const comments = client.CommentStream(streamOpts)
const zerpbot = new Handler()
comments.on('comment', (comment) => {
  zerpbot.handle(comment)
})
