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

  submit = () => {
    const myHeaders = new Headers();
    myHeaders.append('Token', 'AqgeOIM0Hbbm99KLKcdUzyh0TIifgQgbVK4dHbOZm4jiaS_--IrK-vkXHZTDW6Tj6k-brynmTQhjUFVk1UkSGQK9Tsutu9aH-r_s_sSn5h9-jT3KLRQtUeT5HVyXVdYP6ProNPKiEMzeBo_t87Bqf2jk_Tl4sS902qANfI2TlR3qaOqT6y6KgzPIv8kc');
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({ email: this.state.email, password: this.state.password });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(''https://cors-anywhere.herokuapp.com/https://f9d0228e.ngrok.io/auth', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.UserToken) {
          localStorage.setItem('grofor_token', result.UserToken);
          localStorage.setItem('grofor_role', result.role);
          alert('Успешно');
          window.location.href = '/profile';
        } else {
          alert('Неверные данные.');
        }
      })
      .catch((error) => console.log('error', error));
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
                onClick={this.submit}
                size="large"
              >
                Вход
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
