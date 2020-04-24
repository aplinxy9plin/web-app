import React, { Component } from 'react';
import {
  Button, Form, Grid, Header, Image, Message, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  render() {
    const {
      email,
      password,
    } = this.state;
    console.log(this.state);
    return (
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={Logo} />
            {' '}
            Войти в аккаунт
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input onChange={this.onChange} name="email" fluid icon="user" iconPosition="left" placeholder="Email или телефон" />
              <Form.Input
                onChange={this.onChange}
                name="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Пароль"
                type="password"
              />
              <Button
                disabled={
                  !email || !password
                }
                color="teal"
                fluid
                size="large"
              >
                Регистрация
              </Button>
            </Segment>
          </Form>
          <Message>
            Нет аккаунта?
            {' '}
            <Link to="/register">Регистрация</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
