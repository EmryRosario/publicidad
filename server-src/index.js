import express from 'express'
import bodyParser from 'body-parser'
import ReactDOMServer from 'react-dom/server'
import Layout from './views/layout'
import React from 'react'

const PORT = process.env.PORT || 9966
const app = express()

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(express.static('app'))

app.get(['/:name', '/'], (req, res) => {
  res.send(ReactDOMServer.renderToString(<Layout />))
})

app.listen(PORT, () => console.log(`Server Listen on port ${PORT}`))
