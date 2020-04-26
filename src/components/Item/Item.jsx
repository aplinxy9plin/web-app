import React, { useState } from 'react';
import {
  Grid, Image, Header, Segment, Button, Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import templateGreen from '../../assets/template-green.png';
// eslint-disable-next-line import/no-cycle
import ItemModal from '../ItemModal/ItemModal';

const Item = ({ modal, item, add }) => {
  const [openItem, setOpenItem] = useState(false);
  console.log(item.photo);
  return (
    <div
      onKeyDown={() => setOpenItem(true)}
      onClick={(e) => {
        if (e.target.id === 'addBasket') {
          if (!localStorage.getItem('grofor_basket')) {
            localStorage.setItem('grofor_basket', JSON.stringify([item]));
          } else {
            const basket = JSON.parse(localStorage.getItem('grofor_basket'));
            basket.push(item);
            localStorage.setItem('grofor_basket', JSON.stringify(basket));
          }
        } else {
          setOpenItem(true);
        }
      }}
      tabIndex={0}
      role="button"
    >
      <Grid className={modal && 'item'} fluid style={{ paddingTop: 10 }}>
        <Grid.Row style={{ padding: 10 }}>
          <Grid fluid>
            <Grid.Row>
              <Grid.Column width={4} style={{ marginLeft: '30px' }}>
                <Image src={(item.photo && item.photo !== 'base64') ? item.photo : templateGreen} style={{ borderRadius: '10px' }} />
              </Grid.Column>
              <Grid.Column width={11}>
                <Grid fluid>
                  <Grid.Row>
                    <Grid.Column width={11}>
                      <Header as="h1">{item.name}</Header>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header as="h1">
                        <span role="img" aria-label="love">❤️</span>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Header as="h4" style={{ lineHeight: 0 }}>{`${item.firstname} ${item.lastname}`}</Header>
                <p>
                  Метод:
                  {item.method}
                  {' '}
                  <br />
                  Тип:
                  {' '}
                  {item.type}
                </p>
                <Grid verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column width={11}>
                      <Segment secondary style={{ padding: 7 }}>
                        <center>
                          <Header as="h3">
                            <b>
                              {item.price}
                              {' '}
                              {item.currency}
                              {' '}
                              -
                              {' '}
                            </b>
                            1
                            {' '}
                            {item.unit}
                          </Header>
                        </center>
                      </Segment>
                    </Grid.Column>
                    {
                      !add && (
                      <Grid.Column width={3}>
                        <Button
                          color="green"
                          style={{ fontSize: '1.1em' }}
                          id="addBasket"
                        >
                          +
                        </Button>
                      </Grid.Column>
                      )
                    }
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
            item={item}
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
  item: PropTypes.object,
  add: PropTypes.bool,
};

export default Item;
