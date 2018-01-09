import page from 'page'
import React from 'react'
import reactDOM from 'react-dom'
import Login from './containers'

page('/login', () => {
  let appContainer = document.getElementById('app')
  reactDOM.render(<Login />, appContainer)
})
