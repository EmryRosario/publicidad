import React, {Component} from 'react'

class create extends Component {
  constructor (props) {
    super(props)

    
  }
  render () {
    return (
        <form action=''>
      <div className='col-sm-12 col-md-6'>
        <div className='form-group'>
        <label for='txtId'>{'Id'}</label>
        <input type='text' className='form-control' id='txtId' />
      </div>

      <div className='form-group'>
        <label for='txtName'>{'Nombre'}</label>
        <input type='text' className='form-control' id='txtNombre' />
      </div>

      <div className='from-group'>
        <label for='txtDescription'>{'Descripción'}</label>
        <textarea  id='txtDescription'  rows='4' className='form-control' value={'Descripcion...'} />
      </div>
      <div className='form-group'>
        <label for='cbTipo'>{'Tipo'}</label>
        <select name='' id='cbTipo' className='form-control'>
          <option value=''>{'A'}</option>
          <option value=''>{'E'}</option>
        </select>
      </div>
     </div>
     <div className='col-sm-12 col-md-6'>

       <div className='form-group'>
         <label for='txtSince'>{'Desde'}</label>
         <input type='text' className='form-control' id='txtSince' />
       </div>

       <div className='form-group'>
         <label for='txtUntil'>{'Hasta'}</label>
         <input type='text' className='form-control' id='txtUntil' />
       </div>
     </div>
     <div className='col-sm-12'>
       <label for='txtComment'>{'Comentario'}</label>
       <textarea name='' id=''  rows='4' className='form-control' value={'Comentario...'} />
     </div>
    </form>
    )
  }
}

export default create
