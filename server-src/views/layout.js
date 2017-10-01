import React, {Component} from 'react'

export default class Layout extends Component {
  render () {
    return (
      <html lang={'es'}>
        <head>
          <meta charSet={'UTF-8'} />
          <title>{'Publicidad'}</title>
          <meta http-equiv={'Expires'} content={'0'} />
          <meta http-equiv={'Last-Modified'} content={'0'} />
          <meta http-equiv={'Cache-Control'} content={'no-cache, mustrevalidate'} />
          <meta http-equiv={'Pragma'} content={'no-cache'} />
          <link rel="stylesheet" href={'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'} />
        </head>
        <body>
          <div id={'app'} />
          <script type={'text/javascript'} src={'/index.js'} />
          <script src={'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'} />
          <script src={'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'} />
        </body>
      </html>
    )
  }
}
