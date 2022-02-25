import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

// === Ceritanya fetching data ====
    import PersonAPI from '../assets/persons'
// ===============================

class Person extends Component {
    componentDidMount() {
        console.log('Data dari Redux Store')
        console.log('Data: ', this.props.data)
        PersonAPI
            .all()
            .then(persons => {
                    this.props.dispatch({
                        type: 'person/ADD',
                        payload: persons
                    })
                    return true
                }
            )
            // .then(result => console.log('Data: ', this.props.data))
    }
    render () {
        console.log('DATA : ', this.props.data)
        const { data } = this.props
        return (
            <div className="container">{ data.length }</div>
        )
    }
}

export default connect(state => ({
    data: state.persons
}))(Person)