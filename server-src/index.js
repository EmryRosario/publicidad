import express from 'express'
import bodyParser from 'body-parser'
import ReactDOMServer from 'react-dom/server'
import Layout from './views/layout'
import React from 'react'
import dbConfig from './db-config.js'
import mysql from 'mysql'
import routes from './routes'

const PORT = process.env.PORT || 9966
const app = express()

let connection = mysql.createConnection(dbConfig)

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(express.static('app'))

app.get(routes, (req, res) => {
  res.send(ReactDOMServer.renderToString(<Layout />))
})


app.get('/api/advertisements', (req, res) => {
  res.json([
    {id: '1', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},
    {id: '2', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},
    {id: '3', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},
    {id: '4', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},
    {id: '5', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},
    {id: '6', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},
    {id: '7', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},
    {id: '8', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},
    {id: '9', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},
    {id: '10', nombre:'sadsad', empresa:'sadsdas', tipo:'sadsadsa', desde:'sadsafdg', hasta:'sdsadsd', estado:'sadsadass'},

  ])
})

app.listen(PORT, () => console.log(`Server Listen on port ${PORT}`))
