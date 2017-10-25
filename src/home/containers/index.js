import React, {Component} from 'react'
import youtube from 'youtube-iframe-player'
import request from 'axios'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.getAdsByHour = this.getAdsByHour.bind(this)
    this.playVideo = this.playVideo.bind(this)
  }

  componentDidMount () {

    this.playVideo()
  }

  playVideo () {
    return new Promise((resolve, reject) => {
      youtube.init(() => {
      this.getAdsByHour()
      .then((result) => {
        if (result) {
          youtube.createPlayer('player', {
          width: '640',
          height: '360',
          videoId: result.descripcion,
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
        } else {

          this.getCommerce(this.props.business)
          .then((result) => {
            youtube.createPlayer('player', {
            width: '640',
            height: '360',
            videoId: result.nombredefaul,
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
          })
        }
      resolve(true)
      })
      .catch((error) => reject(error))
    })
    })
  }
  getCommerce (id) {
    let options = {
      method: 'GET',
      url: '/api/business',
      json: true,
      params: {id}
    }

    return new Promise((resolve, reject) => {
      request(options)
      .then((result) => {
        console.log(result)
        resolve(result.data[0])
      })
      .catch((error) => reject(error))
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
      .then((result) =>  resolve(result.data[0]))
      .catch((error) => reject(error))
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
