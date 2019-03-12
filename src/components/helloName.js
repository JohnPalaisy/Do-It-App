import React from 'react'
import { connect } from 'react-redux'


const HelloName = (props) => {
  const {profile} = props
  console.log(props)
  return(
    <h1 className="center">Hi {profile.firstName},</h1>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(HelloName)