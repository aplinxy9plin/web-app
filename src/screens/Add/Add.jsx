/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import {
  Button, Form, Grid, Header, Image, Message, Segment, Checkbox, Search, Select,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fermer: false,
      list: null,
      isLoading: null,
      address: null,
      currency_id: 1,
      name: '',
      method: '',
      type: '',
      base64: '',
      price: '',
      weight: '',
      unit_id: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  getFile = () => {
    const self = this;
    const toBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    async function Main() {
      const file = document.querySelector('#myfile').files[0];
      const base64 = await toBase64(file);
      self.setState({ base64 });
    }

    Main();
  }

  submit = () => {
    const {
      name,
      method,
      type,
      base64,
      price,
      currency_id,
      weight,
      unit_id,
    } = this.state;
    const myHeaders = new Headers();
    myHeaders.append('Token', 'AqgeOIM0Hbbm99KLKcdUzyh0TIifgQgbVK4dHbOZm4jiaS_--IrK-vkXHZTDW6Tj6k-brynmTQhjUFVk1UkSGQK9Tsutu9aH-r_s_sSn5h9-jT3KLRQtUeT5HVyXVdYP6ProNPKiEMzeBo_t87Bqf2jk_Tl4sS902qANfI2TlR3qaOqT6y6KgzPIv8kc');
    myHeaders.append('UserToken', localStorage.getItem('grofor_token'));
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      method, name, type, photo: base64, price, currency_id, weight, unit_id, sale: 10,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch('https://f9d0228e.ngrok.io/grow', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.messageSuccess) {
          alert('Успешно!');
          window.location.href = '/map';
        }else{
          alert('Проблемес');
        }
      })
      .catch((error) => console.log('error', error));
  }

  render() {
    const {
      fermer,
      address,
      name,
      email,
      phone,
      password,
      inn,
      base64,
    } = this.state;
    console.log(this.state);
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="large">
            <Segment stacked>
              <Form.Input onChange={this.onChange} name="name" fluid iconPosition="left" placeholder="Название" />
              <Form.Input onChange={this.onChange} name="type" fluid iconPosition="left" placeholder="Тип" />
              <Form.Input onChange={this.onChange} name="method" fluid iconPosition="left" placeholder="Метод" />
              <Form.Group widths="equal">
                <Form.Input fluid placeholder="Цена" onChange={this.onChange} name="price" />
                <Select
                  name="currency_id"
                  onChange={this.onChange}
                  placeholder="рубль"
                  options={
                    [
                      {
                        key: 1,
                        value: 1,
                        text: 'Рубль',
                      },
                      {
                        key: 2,
                        value: 2,
                        text: 'Доллар',
                      },
                    ]
                  }
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input fluid placeholder="Вес" onChange={this.onChange} name="weight" />
                <Select
                  name="unit_id"
                  onChange={this.onChange}
                  placeholder="Кг"
                  options={
                    [
                      {
                        key: 1,
                        value: 1,
                        text: 'гр',
                      },
                      {
                        key: 2,
                        value: 2,
                        text: 'кг',
                      },
                    ]
                  }
                />
              </Form.Group>
              {
                !base64 ? (
                  <Button
                    onClick={() => this.inp.click()}
                  >
                    Выбрать изображение
                  </Button>
                ) : (
                  <img width="200px" src={base64} alt="base64" />
                )
              }
              <input onChange={this.getFile} style={{ display: 'none' }} type="file" id="myfile" ref={(inp) => this.inp = inp} />
              <Button
                onClick={this.submit}
                style={{ marginTop: '40px' }}
                color="teal"
                fluid
                size="large"
              >
                Добавить
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Add;
