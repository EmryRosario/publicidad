import page from 'page'
import React from 'react'
import reactDOM from 'react-dom'
import App from './containers'

page('/:name', (ctx) => {
  let appContainer = document.getElementById('app')
  let name = ctx.params.name
  
  reactDOM.render(<App name={name} />, appContainer)
})
