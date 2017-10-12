import React, {Component} from 'react'
import request from 'axios'
import Searcher from './searcher'
import AdvertisementsList from './advertisements-list'
import CreateButton from './create-button'
import CreateModal from './create-modal'

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
        <div className={'col-xs-12 pull-right'}>
          <Searcher handleAdsList = {this.handleAdsList} />
          <CreateButton />
          <CreateModal target={'create-advertisements-modal'} operation={1} />
        </div>

        <table className={'table table-condensed table-hover'}>
          <thead>
            <tr>
              <th>{'Codigo'}</th>
              <th>{'Nombre'}</th>
              <th>{'Empresa'}</th>
              <th>{'Tipo'}</th>
              <th>{'Desde'}</th>
              <th>{'Hasta'}</th>
              <th>{'estado'}</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <AdvertisementsList ads={this.state.ads} />
        </table>
      </div>
    )
  }

}

export default Advertisements
