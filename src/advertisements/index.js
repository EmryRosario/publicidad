import page from 'page'
import React from 'react'
import reactDOM from 'react-dom'
import CreateAdvertisements from './components/create'
page('/', (ctx, next) => {
  let appContainer = document.getElementById('app')

  reactDOM.render(<CreateAdvertisements />, appContainer)
})
