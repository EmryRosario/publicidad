import React, {Component} from 'react'
import CreateForm from './create.js'
import request from 'axios'
import alertify from 'alertifyjs'
import PropTypes from 'prop-types'
import $ from 'jquery'

class createModal extends Component {

  constructor (props) {
    super(props)
    this.state = {
      id : '',
      name : '',
      description : '',
      type : 'x',
      since : '',
      until : '',
      comment : '',
      business: 'x'
    }

    this.inputHandleChange = this.inputHandleChange.bind(this)
    this.saveCommercial = this.saveCommercial.bind(this)
    this.submit = this.submit.bind(this)
    this.loadAd = this.loadAd.bind(this)
    this.updateCommercial = this.updateCommercial.bind(this)
  }
  inputHandleChange (event) {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }
  componentDidMount () {
    this.loadAd()
  }
  saveCommercial() {
    alertify.confirm('¿Seguro que desea guardar este anuncio?',
    () =>{
      let commercial = {
        name: this.state.name,
        description: this.state.description,
        type: this.state.type,
        since: this.state.since,
        until: this.state.until,
        comment: this.state.comment,
        business: this.state.business
      }
      if (!commercial.name || !commercial.description || !commercial.type ||
        !commercial.since || !commercial.until || !commercial.comment ||
        !commercial.business || commercial.business == 'x' || commercial.type == 'x' ||
        commercial.since > commercial.until) {
          return alertify.error('Por favor completar todos los campos para continuar.')
        }

      let options = {
        method: 'POST',
        url: '/api/commercial',
        data: commercial
      }

      request(options)
      .then(() => {
        this.closeModal()
        alertify.success('El anuncio fue registrado correctamente.')
      })
      .catch((error) => {
        console.log(error)
        alertify.error('Ha ocurrido un error, el anuncio no fue registrado.')} )
    },
    () => {
      alertify.error('El anuncio no fue registrado.');
    })

  }

  loadAd () {
    if (this.props.adId) {
      let options = {
        method: 'GET',
        url: '/api/advertisements',
        json: true,
        params: {
          id : this.props.adId
        }
      }
      request(options)
      .then((result) => {
        this.setState({
          id : result.data[0].id,
          name : result.data[0].nombre,
          description : result.data[0].descripcion,
          type : result.data[0].tipoId,
          since : result.data[0].desde,
          until : result.data[0].hasta,
          comment : result.data[0].comentario,
          business: result.data[0].idEmpresa,
          state: result.data[0].estado
        })
      })
    }
  }

  updateCommercial () {
    alertify.confirm('¿Seguro que desea modificar este anuncio?',
    () => {
      let commercial = {
        id: this.props.adId,
        name: this.state.name,
        description: this.state.description,
        type: this.state.type,
        since: this.state.since,
        until: this.state.until,
        comment: this.state.comment,
        business: this.state.business,
        state: this.state.state
      }
      console.log(commercial)
      if (!commercial.name || !commercial.description || !commercial.type ||
        !commercial.since || !commercial.until ||  !commercial.business ||
         commercial.business == 'x' || commercial.type == 'x' || commercial.state == 'x') {
          return alertify.error('Por favor completar todos los campos para continuar.')
        }

      let options = {
        method: 'PUT',
        url: '/api/commercial',
        data: commercial
      }

      request(options)
      .then(() => {
        this.closeModal()
        alertify.success('El anuncio fue modificado correctamente.')
      })
      .catch((error) => {
        console.log(error)
        alertify.error('Ha ocurrido un error, el anuncio no fue modificado.')} )
    },
    () => {
      alertify.error('El anuncio no fue modificado.');
    })
  }

  submit () {
    switch (this.props.operation) {
      case 1:
        this.saveCommercial()
        break
      case 2:
        this.updateCommercial()
        break
      case 3:
        this.closeModal()
        break
    }
  }
   closeModal() {
    document.getElementById(`close-modal-${this.props.target}`).click()
  }
  render () {
    return (
      <div className='modal fade' id={this.props.target} tabIndex='-1' role='dialog' aria-labelledby='myModalLabel'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
                <h4 className='modal-title' id='myModalLabel'>{'Crear Nuevo Anuncio'}</h4>
              </div>
              <div className='modal-body'>
                <CreateForm {...this.state} operation={this.props.operation} inputHandleChange={this.inputHandleChange} />
              </div>
              <div className={'modal-footer'}>
              <button type='button' className='btn btn-default' id={`close-modal-${this.props.target}`}
              data-dismiss='modal'><i className={'fa fa-times'} aria-hidden={'true'} />{' Cerrar'}</button>
                <button onClick={this.submit} type='button' className='btn btn-primary'><i className={'fa fa-send'} aria-hidden={'true'} />{' Aceptar'}</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
createModal.propTypes = {
  operation: PropTypes.number,
  target: PropTypes.string.isRequired
}
export default createModal
