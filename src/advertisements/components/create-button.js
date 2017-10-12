import React, {Component} from 'react'

class CreateButton extends Component {
  render () {
    return (
      <div className={'col-xs-12 text-right form-group'}>
        <button className={'btn btn-primary'} data-toggle={'modal'} data-target={'#create-advertisements-modal'}>
          <i className={'fa fa-plus'} aria-hidden={'true'} />{'  Crear nuevo anuncio'}
        </button>
      </div>
    )
  }
}

export default CreateButton
