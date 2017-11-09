import React, {Component} from 'react'
import youtube from 'youtube-iframe-player'
import request from 'axios'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      image: null
    }

    this.getAdsByHour = this.getAdsByHour.bind(this)
    this.playCommercial = this.playCommercial.bind(this)
    this.setImage = this.setImage.bind(this)
  }

  componentDidMount () {
      let commercial = {}
      this.getAdsByHour()
      .then((result) => {
        if (result) {
          commercial.description = result.descripcion
          commercial.type = result.tipo
          this.playCommercial(commercial)
        } else {
          this.getCommerce(this.props.business)
          .then((result) => {
            commercial.description = result.nombredefaul
            commercial.type = result.tipodefault
            this.playCommercial(commercial)
          })
        }


      })
  }

playCommercial (commercial) {
  switch (commercial.type) {
    case 1:
      this.playVideo({description: commercial.description})
      break;
    case 3:
      this.setImage(commercial.description)
      break;

  }
}
setImage (image) {
  this.setState({
    image
  })
  setTimeout(() => document.location.href = 'https://www.google.com.do', 10000)
}
  playVideo (video) {
    youtube.init(() => {
      youtube.createPlayer('player', {
      width: '640',
      height: '360',
      videoId: video.description,
      playerVars: { 'autoplay': 1, 'controls': 1 },
      events: {
          'onStateChange': (event) => {
            if (event.data == 0) {
              document.location.href = 'https://www.google.com.do'
            }
          }
      }
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
        <div id={'player'}> {
          this.state.image ? (<img className={'img-responsive'} src={this.state.image}></img>) : null
        }</div>
      </div>)
  }
}
