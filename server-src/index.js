import express from 'express'
import bodyParser from 'body-parser'
import ReactDOMServer from 'react-dom/server'
import Layout from './views/layout'
import React from 'react'
import routes from './routes'
import Connection from './connection.js'

const PORT = process.env.PORT || 9966
const app = express()

let connection = new Connection()
connection.connect()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('app'))

app.get(routes, (req, res) => {
  res.send(ReactDOMServer.renderToString(<Layout />))
})


app.get('/api/advertisements', (req, res) => {

  connection.getAdvertisements(req.query.id).
  then((result) => {
    res.json(result)
  })
})

app.get('/api/business', (req, res) => {
  connection.getBusiness()
  .then((result) => {
    res.json(result)
  })

})
app.get('/api/types', (req, res) => {
  connection.getTypes()
  .then((results) => res.json(results))
})

app.post('/api/commercial', (req, res) => {
  let commercial = req.body

  console.log(req.params, req.body, req.query)
  connection.saveCommercial(commercial)
  .then(() => res.json(req.params, req.body, req.query))
  .catch(() => res.json(req.params, req.body, req.query))
})

app.listen(PORT, () => console.log(`Server Listen on port ${PORT}`))
