import React, { Component } from 'react';
import {
  Container, Header, Search, Grid, Card, Image, Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Map from '../../components/GoogleMap/GoogleMap';

import people1 from './YvxreYTf9wY.jpg';
import people2 from './93640379_2350036188433313_8842286501093062177_n.jpg';
import people3 from './91376739_906582623106310_4991273595571685200_n.jpg';
import people4 from './94675382_703035880506499_8935005580747415760_n.jpg';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container style={{ marginTop: '30px' }}>
        <Header as="h1"> Свежие, натуральные, экологические продукты от городских фермеров, рядом с вами. </Header>
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
                <Image src={people1} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Кирилл Орлов</Card.Header>
                  <Card.Meta>
                    <span className="date">Клубника</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image src={people2} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Воробьев Иван</Card.Header>
                  <Card.Meta>
                    <span className="date">Микрозелень</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image src={people3} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Света Николаева</Card.Header>
                  <Card.Meta>
                    <span className="date">Микрозелень</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image src={people4} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Гоша</Card.Header>
                  <Card.Meta>
                    <span className="date">Лечебные травы</span>
                  </Card.Meta>
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
