import React, {Component} from 'react'
import CreateForm from './create.js'
import request from 'axios'
import alertify from 'alertifyjs'
import PropTypes from 'prop-types'

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
    this.closeModalButton = () => (<button type='button' className='btn btn-default'
    data-dismiss='modal'><i className={'fa fa-times'} aria-hidden={'true'} />{' Cerrar'}</button>)
    this.inputHandleChange = this.inputHandleChange.bind(this)
    this.saveCommercial = this.saveCommercial.bind(this)
    this.submit = this.submit.bind(this)
    this.loadAd = this.loadAd.bind(this)
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
        !commercial.business || commercial.business == 'x' || commercial.type == 'x') {
          return alertify.error('Por favor completar todos los campos para continuar.')
        }

      let options = {
        method: 'POST',
        url: '/api/commercial',
        data: commercial
      }

      request(options)
      .then(() => {
        console.log(this.closeModalButton)

        this.closeModalButton().click()

        alertify.success('El anuncio fue registrado correctamente.');
      })
      .catch((error) => {
        console.log(error)
        alertify.error('Ha ocurrido un error, el anuncio no fue registrado.')} )
    },
    () => {
      alertify.error('El anuncio no fue registrado.');
    });

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
          id : result[0].data.id,
          name : result[0].data.nombre,
          description : result[0].data.descripcion,
          type : result[0].data.tipo,
          since : result[0].data.desde,
          until : result[0].data.hasta,
          comment : result[0].data.comentario,
          business: result[0].data.idEmpresa
        })
      })
    }
  }

  submit () {
    switch (this.props.operation) {
      case 1:
        this.saveCommercial()
        break
    }
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
                <this.closeModalButton />
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
