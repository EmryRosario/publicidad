import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Searcher extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    return (
      <div className='col-sm-12'>
        <div className='col-sm-12 col-md-4 pull-right form-inline'>
          <div className={'form-group'}>
            <label><i className={'fa fa-search'} aria-hidden={'true'} /></label>
            <input className='form-control' type='text' value={this.state.searchText} onChange={this.handleChange} />
          </div>
        </div>
      </div>

    )
  }

  handleChange (e) {
    let newSearchText = e.target.value
    this.setState({
      searchText: newSearchText
    })

    this.props.handleAdsList(newSearchText)
  }
}

Searcher.propTypes = {
  handleAdsList: PropTypes.func.isRequired
}

export default Searcher