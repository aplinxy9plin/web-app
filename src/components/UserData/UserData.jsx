import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';

const FormExampleForm = () => {
  const [state, setstate] = useState(null);

  useEffect(() => {
    setstate({
      name: 'Nikita',
      phone: '89131092684',
      email: 'qwe@qwe.ru',
    });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setstate((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Form>
      {
        state && (
          <div>
            <Form.Group inline>
              <Form.Input
                placeholder="Имя"
                value={state.name}
                name="name"
                onChange={onChange}
              />
              <Form.Input
                type="number"
                placeholder="Телефон"
                value={state.phone}
                name="phone"
                onChange={onChange}
              />
              <Form.Input
                placeholder="Email"
                value={state.email}
                name="email"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Button
              primary
              fluid
            >
              Сохранить изменения
            </Form.Button>
          </div>
        )
      }
    </Form>
  );
};

export default FormExampleForm;
