import React, {Component} from 'react'
import YouTubePlayer from 'youtube-player'

export default class Home extends Component {
  componentDidMount () {

    let player = YouTubePlayer('player', {
          height: '360',
          width: '640',
          videoId: 'ZXjG_pBzOdY'
   })

   player
   .on('ready', (event) => {
     event.target.playVideo()
   })

   player
   .on('stateChange', (event) => {
     if (event.data == 0) {
       document.location.href = 'https://www.google.com.do'
     }
   })

  }
  render () {
    return (<div>
        <h4>{'Bienvenido ' + this.props.name}</h4>
        <div id={'player'} />
      </div>)
  }
}
