import page from 'page'
import React from 'react'
import reactDOM from 'react-dom'
import CreateAdvertisements from './components/advertisements'
page('/', (ctx, next) => {
  let appContainer = document.getElementById('app')

  reactDOM.render(<CreateAdvertisements />, appContainer)
})
