import React, { useState } from 'react';
import {
  Grid, Image, Header, Segment, Button, Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import templateGreen from '../../assets/template-green.png';
// eslint-disable-next-line import/no-cycle
import ItemModal from '../ItemModal/ItemModal';

const Item = ({ modal }) => {
  const [openItem, setOpenItem] = useState(false);
  return (
    <div
      onKeyDown={() => setOpenItem(true)}
      onClick={() => setOpenItem(true)}
      tabIndex={0}
      role="button"
    >
      <Grid className={modal && 'item'} fluid style={{ paddingTop: 10 }}>
        <Grid.Row style={{ padding: 10 }}>
          <Grid fluid>
            <Grid.Row>
              <Grid.Column width={4} style={{ marginLeft: '30px' }}>
                <Image src={templateGreen} style={{ borderRadius: '10px' }} />
              </Grid.Column>
              <Grid.Column width={11}>
                <Grid fluid>
                  <Grid.Row>
                    <Grid.Column width={11}>
                      <Header as="h1">Pea Shoots</Header>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header as="h1">
                        <span role="img" aria-label="love">❤️</span>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Header as="h4" style={{ lineHeight: 0 }}>A. Smith</Header>
                <p>Tasty, healthy beet leaves, similar in taste and use tspinach...</p>
                <Grid verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column width={11}>
                      <Segment secondary style={{ padding: 7 }}>
                        <center>
                          <Header as="h3">
                            <b>3,50 $ - </b>
                            0,1kg
                          </Header>
                        </center>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Button
                        color="green"
                        style={{ fontSize: '1.1em' }}
                      >
                        +
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
      <Divider />
      {
        modal && (
          <ItemModal
            open={openItem}
            closeItem={() => setOpenItem(false)}
          />
        )
      }
    </div>
  );
};

Item.propTypes = {
  modal: PropTypes.bool.isRequired,
};

export default Item;
