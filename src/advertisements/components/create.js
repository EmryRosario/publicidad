import React, {Component} from 'react'
import request from 'axios'
class create extends Component {
  constructor (props) {
    super(props)

    this.getBusiness = this.getBusiness.bind(this)
    this.getTypes = this.getTypes.bind(this)
    this.state = {
      business: [],
      types: []
    }

  }
  componentDidMount () {
    this.getBusiness()
    .then((result) => {
      this.setState({business: result.data})
    })

    this.getTypes()
    .then((result) => this.setState({types: result.data}))
  }
  getBusiness () {
    let options = {
      method: 'GET',
      url: '/api/business',
      json: true,
    }
    return request(options)

  }

  getTypes () {
    let options = {
      method: 'GET',
      url: '/api/types',
      json: true,
    }
    return request(options)
  }

  render () {
    return (
      <form>
          <div className={'col-sm-12 col-md-6'}>
            <div className='form-group'>
              <label htmlFor='txtId' className={this.props.operation == 1 ? 'hidden' : ''}>{'Id'}</label>
              <input name={'id'} type='text' readOnly={true} value={this.props.id}
               onChange={this.props.inputHandleChange} className={this.props.operation == 1 ? 'hidden' : '' +'form-control'} id='txtId' />
            </div>

            <div className='form-group'>
              <label htmlFor='txtName'>{'Nombre'}</label>
              <input type='text' name={'name'} className='form-control' onChange={this.props.inputHandleChange} value={this.props.name} />
            </div>

            <div className='from-group'>
              <label htmlFor='txtDescription'>{'Descripción'}</label>
              <textarea name={'description'}   onChange={this.props.inputHandleChange}  rows='4' className='form-control' value={this.props.description} />
            </div>

            <div className='form-group'>
              <label htmlFor='cbType'>{'Tipo'}</label>
              <select  name={'type'} value={this.props.type} onChange={this.props.inputHandleChange} className='form-control'>
                <option key='x' value='x'>{'Seleccione tipo de anuncio...'}</option>
                {this.state.types.map((type) => (<option key={type.id} value={type.id}>{type.descripcion}</option>))}
              </select>
            </div>
          </div>


          <div className={'col-sm-12 col-md-6'}>
            <div className='form-group'>
              <label htmlFor='cbBusiness'>{'Patrocinador'}</label>
              <select   name={'business'} value={this.props.business} onChange={this.props.inputHandleChange} className={'form-control'}>
                <option value='x' key={'x'}>{'Seleccione  negocio...'}</option>
                {this.state.business.length > 0 ?
                  this.state.business.map((business) => (<option key={business.id} value={business.id}>{business.nombre}</option>)) :
                (<option>{'No hay disponible en este momento...'}</option>) }
              </select>
            </div>

             <div className='form-group'>
               <label htmlFor='txtSince'>{'Desde'}</label>
               <input type='time' name={'since'} onChange={this.props.inputHandleChange} value={this.props.since} className='form-control' />
             </div>

             <div className='form-group'>
               <label htmlFor='txtUntil'>{'Hasta'}</label>
               <input value={this.props.until} name={'until'} onChange={this.props.inputHandleChange} type='time' className='form-control'  />
             </div>
          </div>


         <div className={'form-group'}>
           <textarea name={'comment' } onChange={this.props.inputHandleChange}  rows='4' className='form-control' placeHolder={'Comentario...'} value={this.props.comment} />
         </div>

  </form>
    )
  }
}

export default create
