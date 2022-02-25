import React from 'react'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.loginSession.userSession.username
        }
    }

    render () {
        console.log('Data navbar: ', this.props.loginSession)
        return(
            <>
                <h1>{this.props.loginSession.userSession.username}</h1>
            </>
        )
    }
}

export default connect(state => ({
    loginSession: state.loginSession
}))(Navbar)