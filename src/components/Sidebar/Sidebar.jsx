import React from 'react';
import {
  Form, Icon, Container, Grid, Select,
} from 'semantic-ui-react';

import Item from '../Item/Item';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const Sidebar = () => (
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
    <Item modal />
  </Container>
);

export default Sidebar;
