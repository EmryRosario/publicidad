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
      json: true
    }
    request(options)
    .then((response) => {
      let ads
      if (text) {
        text = text.toLowerCase()
        ads = response.data.filter(f => (f.empresa.toLowerCase().search(text) > -1 ||
        f.id.toString().search(text) > -1 || f.idEmpresa.toString().search(text) > -1 || f.comentario.toLowerCase().search(text) > -1 ||
        f.descripcion.toLowerCase().search(text) > -1
       ))
     } else {
       ads = response.data
     }
      this.setState({
        ads
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
