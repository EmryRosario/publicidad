import React, {Component} from 'react'
import request from 'axios'
import Searcher from './searcher'
import AdvertisementsList from './advertisements-list'

class Advertisements extends Component {
  constructor (props) {
    super(props)
      this.state = {
        ads: []
      }
      this.handleAdsList = this.handleAdsList.bind(this)
      this.getAds = this.getAds.bind(this)
  }
  componentDidMount () {
    this.getAds()
  }

  getAds (text) {
    let options = {
      method: 'GET',
      url: '/api/advertisements',
      json: true,
      params: {
        text
      }
    }
    request(options)
    .then((response) => {
      console.log(response)
      this.setState({
        ads: response.data
      })
    })
  }

  handleAdsList (text) {
    this.getAds(text)
  }

  render () {
    return (
      <div>
        <Searcher handleAdsList = {this.handleAdsList} />
        <table className={'table table-hover'}>
          <thead>
            <tr>
              <th>{'Codigo'}</th>
              <th>{'Nombre'}</th>
              <th>{'Empresa'}</th>
              <th>{'Tipo'}</th>
              <th>{'Desde'}</th>
              <th>{'Hasta'}</th>
              <th>{'estado'}</th>
            </tr>
          </thead>
          <AdvertisementsList ads={this.state.ads} />
        </table>
      </div>
    )
  }

}

export default Advertisements
