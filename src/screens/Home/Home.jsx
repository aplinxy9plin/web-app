import React, { Component } from 'react';
import {
  Container, Header, Search, Grid, Card, Image, Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Map from '../../components/GoogleMap/GoogleMap';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container style={{ marginTop: '30px' }}>
        <Header as="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet voluptas ipsum nihil corrupti eum sapiente est vitae repellat facere voluptatibus, eaque sed illo consequatur ut rerum quisquam harum in.</Header>
        <Search
          fluid
          input={{ fluid: true }}
          size="big"
          placeholder="Поиск"
        />
        <br />
        <Map />
        <Grid style={{ marginTop: '30px' }}>
          <Header as="h1">Фермеры</Header>
          <Grid.Row widths={12}>
            <Grid.Column width={4}>
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="profile">
                    <Icon name="user" />
                    Посмотреть профиль
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="profile">
                    <Icon name="user" />
                    Посмотреть профиль
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="profile">
                    <Icon name="user" />
                    Посмотреть профиль
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="profile">
                    <Icon name="user" />
                    Посмотреть профиль
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;
