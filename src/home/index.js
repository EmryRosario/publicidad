import page from 'page'
import React from 'react'
import reactDOM from 'react-dom'
import App from './containers'

page('/:business', (ctx) => {
  let appContainer = document.getElementById('app')
  let business = ctx.params.business

  reactDOM.render(<App business={business} />, appContainer)
})
