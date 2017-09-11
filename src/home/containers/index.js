import React, {Component} from 'react'
import YouTubePlayer from 'youtube-player'
import youtube from 'youtube-iframe-player'

export default class Home extends Component {
  componentDidMount () {

    youtube.init(function() {
      console.log('API Loaded');

      var youtubePlayer = youtube.createPlayer('player', {
          width: '640',
          height: '360',
          videoId: 'ZXjG_pBzOdY',
          playerVars: { 'autoplay': 1, 'controls': 1 },
          events: {
              'onReady': playerReady,
              'onStateChange': onPlayerStateChange
          }
      });

      function playerReady(event) {
          youtubePlayer.playVideo();
      }

      function onPlayerStateChange(event) {
        if (event.data == 0) {
          let directionButton = document.createElement('a')
          directionButton.href = 'https://www.google.com.do'
          directionButton.click()
        }
      }
  })
  //   let player = YouTubePlayer('player', {
  //         height: '360',
  //         width: '640',
  //         videoId: 'ZXjG_pBzOdY'
  //  }
   //
  //  player
  //  .on('ready', (event) => {
  //    event.target.playVideo()
  //  })
   //
  //  player
  //  .on('stateChange', (event) => {
  //    if (event.data == 0) {
  //      document.location.href = 'https://www.google.com.do'
  //    }
  //  })

  }
  render () {
    return (<div>
        <h4>{'Bienvenido ' + this.props.name}</h4>
        <div id={'player'} />
      </div>)
  }
}
