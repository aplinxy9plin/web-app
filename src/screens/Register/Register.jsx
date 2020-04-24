import React, { Component } from 'react';
import {
  Button, Form, Grid, Header, Image, Message, Segment, Checkbox, Search,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fermer: false,
      list: null,
      isLoading: null,
      address: null,
    };
  }

  maps = (e) => {
    const searchQuery = e.currentTarget.value;
    this.setState({ isLoading: true });
    setTimeout(() => {
      const api = `https://geocode-maps.yandex.ru/1.x/?apikey=392a8d0f-e740-49a2-b017-64fe651c0e1a&format=json&geocode=${searchQuery}`;
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            isLoading: false,
            list: data.response.GeoObjectCollection.featureMember.map((item) => ({
              lng: item.GeoObject.Point.pos.split(' ')[0],
              lat: item.GeoObject.Point.pos.split(' ')[1],
              title: item.GeoObject.metaDataProperty.GeocoderMetaData.text,
            })),
          });
        })
        .catch((err) => console.log(err));
    }, 1000);
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ address: result.title });
    console.log(result);
  }

  toggleFermer = () => this.setState((prevState) => ({ fermer: !prevState.fermer }))

  onChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  submit = () => {
    const {
      fermer,
      address,
      name,
      email,
      phone,
      password,
      inn,
    } = this.state;
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = {
      farmer: false, email, password, confirm_password: 'Pas$word1', firstname: name, lastname: '', patronymic: '', number_phone: phone,
    };

    if (fermer) {
      raw.farmer = true;
      raw.farmerData = {
        inn,
        addressData: {
          
        }
      }
    }

    

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('46.236.142.180:5000/registration', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

  render() {
    const {
      fermer,
      list,
      isLoading,
      address,
      name,
      email,
      phone,
      password,
      inn,
    } = this.state;
    console.log(this.state);
    return (
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={Logo} />
            {' '}
            Зарегистрировать аккаунт
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input onChange={this.onChange} name="name" fluid icon="user" iconPosition="left" placeholder="Имя" />
              <Form.Input onChange={this.onChange} name="email" fluid icon="mail" iconPosition="left" placeholder="E-mail" />
              <Form.Input onChange={this.onChange} name="phone" fluid icon="phone volume" iconPosition="left" placeholder="Телефон" />
              <Form.Input
                onChange={this.onChange}
                name="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Пароль"
                type="password"
              />
              <div style={{ display: 'flex', verticalAlign: 'middle', paddingBottom: '30px' }}>
                Фермер?
                <Checkbox onChange={this.toggleFermer} style={{ marginLeft: '25px' }} toggle checked={fermer} />
              </div>
              <div style={{ display: fermer ? 'block' : 'none', paddingBottom: '25px' }}>
                <Form.Input onChange={this.onChange} name="inn" type="number" fluid icon="building" iconPosition="left" placeholder="ИНН" />
                <Search
                  placeholder="Адрес"
                  input={{ fluid: true }}
                  fluid
                  loading={isLoading}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={this.maps}
                  value={address}
                  results={list}
                />
              </div>
              <Button
                disabled={
                  !name
                  || !email
                  || !phone
                  || !password
                  || (fermer ? (
                    !address || !inn
                  ) : false)
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
            Уже есть аккаунт?
            {' '}
            <Link to="/login">Войти</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
