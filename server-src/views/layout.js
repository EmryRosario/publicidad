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
        </head>
        <body>
          <div id={'app'} />
          <script type={'text/javascript'} src={'/index.js'} />
        </body>
      </html>
    )
  }
}
