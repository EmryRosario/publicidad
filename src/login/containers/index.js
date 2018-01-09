import React, {Component} from 'react'
import request from 'axios'

class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<div className='container'>
        <div className='card card-container'>
            <img id='profile-img' className='profile-img-card' src='//ssl.gstatic.com/accounts/ui/avatar_2x.png' />
            <p id='profile-name' className='profile-name-card' />
            <form className='form-signin'>
                <span id='reauth-email' className='reauth-email' />
                <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autoFocus />
                <input type='password' id='inputPassword' className='form-control' placeholder='Password' required />

                <button className='btn btn-lg btn-primary btn-block btn-signin' type='submit'>'Entrar'</button>
            </form>
            <a href='#' className='forgot-password'>
                Contraseña olvidada?
            </a>
        </div>
    </div>)
  }
}

export default Login
