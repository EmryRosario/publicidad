import express from 'express'
import ReactDOMServer from 'react-dom/server'
import Layout from './views/layout'
import React from 'react'

const PORT = process.env.PORT || 5052
const app = express()

app.set('views', './views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('app'))

app.get('/:name', (req, res) => {
  res.send(ReactDOMServer.renderToString(<Layout />))
})

app.listen(PORT, () => console.log(`Server Listen on port ${PORT}`))
