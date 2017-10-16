import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommercialModal from './create-modal'

class AdvertisementsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      getAds: ''
    }
    this.displayAds = this.displayAds.bind(this)

  }

  displayAds (ad) {
    return (
      <tr key={ad.id}>
        <td>{ad.id}</td>
        <td>{ad.nombre}</td>
        <td>{ad.empresa}</td>
        <td><i className={ad.tipo} aria-hidden={'true'} /></td>
        <td>{ad.desde}</td>
        <td>{ad.hasta}</td>
        <td>
          <i className={`fa fa-circle ${ad.estado == 1 ? ' text-success': ' text-danger' }`} aria-hidden={'true'} />
        </td>
        <td>
          <a data-toggle={'modal'} data-target={`#show-advertisements-modal-${ad.id}`}><i className={'fa  fa-eye margin-icon text-success'}
           aria-hidden={'true'} />
          </a>

          <a data-toggle={'modal'} data-target={`#edit-advertisements-modal-${ad.id}`}><i className={'fa fa-pencil  text-warning'}
           aria-hidden={'true'} />
          </a>
       </td>
        <td>
          <CommercialModal getAds={this.props.getAds} target={`edit-advertisements-modal-${ad.id}`} adId={ad.id} operation={2} />
          <CommercialModal getAds={this.props.getAds} target={`show-advertisements-modal-${ad.id}`} adId={ad.id} operation={3} />
        </td>
      </tr>)
  }

  render () {
    let ads = this.props.ads


    return (
      <tbody>
        {ads.map(this.displayAds)}
      </tbody>
    )
  }
}

AdvertisementsList.propTypes = {
  ads: PropTypes.array
}

export default AdvertisementsList
