import React, { Component } from 'react';
import {
  Grid, Container, Menu, Header,
} from 'semantic-ui-react';

// components
import UserData from '../../components/UserData/UserData';
import UserAddress from '../../components/UserAddress/UserAddress';

export class PrivateCabinet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'address',
      tabs: [
        {
          name: 'profile',
          component: <UserData />,
        },
        {
          name: 'address',
          component: <UserAddress />,
        },
      ],
    };
  }

  render() {
    const {
      activeTab,
      tabs,
    } = this.state;
    console.log(activeTab.constructor.name);
    return (
      <Container style={{ paddingTop: '30px' }}>
        <Header as="h1">Мой профиль</Header>
        <Grid style={{ height: 'calc(100vh - 50px)' }} fluid>
          <Grid.Row>
            <Grid.Column width={12}>
              {
                tabs.filter((item) => item.name === activeTab)[0].component
              }
            </Grid.Column>
            <Grid.Column width={4}>
              <Menu vertical>
                <Menu.Item
                  name="Мой профиль"
                  active={activeTab === 'profile'}
                  onClick={() => this.setState({ activeTab: 'profile' })}
                />
                <Menu.Item
                  name="История"
                  active={activeTab === 'history'}
                  onClick={() => this.setState({ activeTab: 'history' })}
                />
                <Menu.Item
                  name="Адрес"
                  active={activeTab === 'address'}
                  onClick={() => this.setState({ activeTab: 'address' })}
                />
                <Menu.Item
                  name="Избранные"
                  active={activeTab === 'favorites'}
                />
                <Menu.Item
                  name="Бонусы"
                  active={activeTab === 'bonuses'}
                />
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default PrivateCabinet;
