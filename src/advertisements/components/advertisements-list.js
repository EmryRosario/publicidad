import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AdvertisementsList extends Component {
  constructor (props) {
    super(props)

  }
  render () {
    let ads = this.props.ads

    function displayAds (ad) {
      return (
        <tr key={ad.id}>
          <td>{ad.id}</td>
          <td>{ad.nombre}</td>
          <td>{ad.empresa}</td>
          <td><i className={ad.tipo} aria-hidden={'true'} /></td>
          <td>{ad.desde}</td>
          <td>{ad.hasta}</td>
          <td>{ad.estado}</td>
          <td>
          <a><i className={'fa  fa-eye margin-icon text-success'} aria-hidden={'true'} /></a>
          <a><i className={'fa fa-pencil margin-icon text-success'} aria-hidden={'true'} /></a>
          <a><i className={'fa fa-times margin-icon text-danger'} aria-hidden={'true'} /></a>
          </td>
        </tr>)
    }
    return (
      <tbody>
        {ads.map(displayAds)}
      </tbody>
    )
  }
}

AdvertisementsList.propTypes = {
  ads: PropTypes.array
}

export default AdvertisementsList
