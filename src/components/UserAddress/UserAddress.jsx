/* eslint-disable no-var */
import React, { useState } from 'react';
import {
  Button, Form, Table,
} from 'semantic-ui-react';

import AddAddress from './AddAddress';

const FormExampleForm = () => {
  const [state, setstate] = useState({
    list: [
      {
        country: 'Россия',
        city: 'Томск',
        address: 'Усова 3',
        lat: 58.24342,
        lng: 85.2312312,
      },
    ],
  });
  const [addAddress, setaddAddress] = useState({ open: false });

  const closeItem = (e) => {
    setaddAddress((prevState) => ({ ...prevState, open: false }));
    // eslint-disable-next-line no-var
    // eslint-disable-next-line vars-on-top
    var tmp = state.list;
    tmp.push(e.address);
    console.log(tmp);
    setstate((prevState) => ({ ...prevState, list: tmp }));
  };

  return (
    <Form>
      {
        state && (
          <Table selectable>
            <Table.Body>
              {
                state.list.map((item, index) => (
                  <Table.Row>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{`${item.country}, ${item.city} ${item.address}`}</Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table>
        )
      }
      <Button
        fluid
        onClick={() => setaddAddress({ open: true })}
      >
        Добавить
      </Button>
      <AddAddress open={addAddress.open} closeItem={closeItem} />
    </Form>
  );
};

export default FormExampleForm;
