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
          <td>{ad.tipo}</td>
          <td>{ad.desde}</td>
          <td>{ad.hasta}</td>
          <td>{ad.estado}</td>
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
