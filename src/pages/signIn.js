import React, { Component } from 'react'
import {signIn} from '../store/actions/authActions'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
    this.props.history.push('/dashboard')
  }


  render() {

    // const {authError, auth} = this.props
    // if(auth.uid) return <Redirect to='/dashboard' />

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Login</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
