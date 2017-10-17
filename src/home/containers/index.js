import React, {Component} from 'react'
import youtube from 'youtube-iframe-player'
import request from 'axios'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.getAdsByHour = this.getAdsByHour.bind(this)
  }

  componentDidMount () {

    youtube.init(() => {
      this.getAdsByHour()
      .then((result) => {
        if (result.length > 0) {
          youtube.createPlayer('player', {
          width: '640',
          height: '360',
          videoId: result[0].descripcion,
          playerVars: { 'autoplay': 1, 'controls': 1 },
          events: {
              'onStateChange': onPlayerStateChange
          }
          })

          function onPlayerStateChange(event) {
            if (event.data == 0) {
              document.location.href = 'https://www.google.com.do'
            }
          }
        }
      })
    })

  }

  getAdsByHour () {
    let hour = this.getHour()

    let business = this.props.business

    let options = {
      method: 'GET',
      url: '/api/advertisements/hour',
      json: true,
      params: {
        hour,
        business
      }
    }

    return new Promise(function(resolve, reject) {
      request(options)
      .then((result) =>  resolve(result.data))
      .catch((result) => reject(result.data))
    })
  }
  getHour () {
    let time =new Date()
    let hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    let minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    let seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()

    let currentHour = hour + ':' + minutes + ':' + seconds
    return currentHour
  }

  render () {
    return (<div>
        <h4>{'Bienvenido ' + this.props.business}</h4>
        <div id={'player'} />
      </div>)
  }
}
