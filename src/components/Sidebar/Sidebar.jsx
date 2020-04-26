import React, { useState, useEffect } from 'react';
import {
  Form, Icon, Container, Grid, Select,
} from 'semantic-ui-react';

import Item from '../Item/Item';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const Sidebar = () => {
  const [state, setstate] = useState(null);
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Token', 'AqgeOIM0Hbbm99KLKcdUzyh0TIifgQgbVK4dHbOZm4jiaS_--IrK-vkXHZTDW6Tj6k-brynmTQhjUFVk1UkSGQK9Tsutu9aH-r_s_sSn5h9-jT3KLRQtUeT5HVyXVdYP6ProNPKiEMzeBo_t87Bqf2jk_Tl4sS902qANfI2TlR3qaOqT6y6KgzPIv8kc');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://cors-anywhere.herokuapp.com/https://cf931bb1.ngrok.io/get_label', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setstate(result);
      })
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <Container fluid>
      <div style={{ width: '100%', padding: 25, background: '#F5F7FA' }}>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              placeholder="Search"
              icon="search"
            />
            <Form.Button
              fluid
              width={8}
              icon="search"
              positive
              basic
            >
              Filters
              <Icon style={{ marginLeft: '5px' }} name="facebook" />
            </Form.Button>
          </Form.Group>
        </Form>
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={6}>
              <b>26</b>
              {' products found'}
            </Grid.Column>
            <Grid.Column width={10} textAlign="right">
              {'Short:  '}
              <Select style={{ color: 'green' }} placeholder="Newest" options={options} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      {
      state && (
        state.map((item) => <Item modal item={item} />)
      )
    }
    </Container>
  );
};

export default Sidebar;
