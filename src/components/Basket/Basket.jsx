import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import Item from '../Item/Item';

const Basket = () => {
  const basket = JSON.parse(localStorage.getItem('grofor_basket'));
  const submit = () => {
    alert('Успешно заказано.');
    localStorage.removeItem('grofor_basket');
    window.location.href = '/';
  };
  return (
    <Container style={{ marginTop: '70px' }}>
      {
        basket
          ? (
            <div>
              {basket.map((item) => (
                <Item
                  item={item}
                  add
                />
              ))}
              <Button
                fluid
                onClick={submit}
              >
                Заказать
              </Button>
            </div>
          ) : <Header>Ничего еще не добавлено</Header>
      }
    </Container>
  );
};

export default Basket;
