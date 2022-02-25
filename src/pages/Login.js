import React from 'react'
import { connect } from 'react-redux'

import { Container, Input } from 'reactstrap'
import { Form, Button, Row, Col } from 'react-bootstrap'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username_input: "",
            password_input: ""
        }
    }

    handleSubmit = (e) => {
        this.props.dispatch({
            type: 'loginSession/LOGIN',
            payload: {
                username: this.state.username_input,
                password: this.state.password_input
            }
        })
        // console.log(this.props.userSession)
    }

    render() {
        // console.log(this.props.userSession)
        return(
            <>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={5}>
                            <h1>Login</h1>
                            <br />
                            <Form 
                            // onSubmit={this.handleSubmit}
                            >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Input type="text" placeholder="Username" onChange={e => this.setState({ username_input: e.target.value })}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Input type="password" placeholder="Password" onChange={e => this.setState({ password_input: e.target.value })}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary"
                                // type="submit"
                                onClick = {this.handleSubmit}
                                >
                                    Login
                                </Button>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default connect(state => ({
    data: state.persons,
    userSession: state.loginSession
}))(Login)