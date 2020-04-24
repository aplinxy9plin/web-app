import React, { useState } from 'react';
import {
  Modal, Button, Search,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AddAddress = ({ open, closeItem }) => {
  const [isLoading, setisLoading] = useState({ check: false });
  const [list, setList] = useState({ list: null });
  const [address, setAddress] = useState({ address: null });

  const maps = (e) => {
    const searchQuery = e.currentTarget.value;
    setisLoading((prevState) => ({ ...prevState, check: true }));
    setTimeout(() => {
      const api = `https://geocode-maps.yandex.ru/1.x/?apikey=392a8d0f-e740-49a2-b017-64fe651c0e1a&format=json&geocode=${searchQuery}`;
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          setisLoading((prevState) => ({ ...prevState, check: false }));
          if (data.response.GeoObjectCollection.featureMember.length > 0) {
            setList((prevState) => ({
              ...prevState,
              list: data.response.GeoObjectCollection.featureMember.map((item) => ({
                lng: item.GeoObject.Point.pos.split(' ')[0],
                lat: item.GeoObject.Point.pos.split(' ')[1],
                country: (item.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.filter((a) => a.kind === 'country')[0] ? item.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.filter((a) => a.kind === 'country')[0].name : ''),
                city: (item.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.filter((a) => a.kind === 'locality')[0] ? item.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.filter((a) => a.kind === 'locality')[0].name : ''),
                address: (item.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.filter((a) => a.kind === 'street')[0] ? item.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.filter((a) => a.kind === 'street')[0].name : '') + (item.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.filter((a) => a.kind === 'house')[0] ? item.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.filter((a) => a.kind === 'house')[0].name : ''),
                title: item.GeoObject.metaDataProperty.GeocoderMetaData.text,
              })),
            }));
          }
        })
        .catch((err) => console.log(err));
    }, 1000);
  };

  const handleResultSelect = (e, { result }) => {
    setAddress((prevState) => ({ ...prevState, address: result }));
  };

  const closeItemState = (data) => {
    if (data === 'click') {
      closeItem(address);
    } else {
      closeItem(null);
    }
  };

  return (
    <Modal open={open} onClose={closeItemState}>
      <Modal.Content>
        <Modal.Description>
          <Search
            placeholder="Адрес"
            input={{ fluid: true }}
            fluid
            loading={isLoading.check}
            onResultSelect={handleResultSelect}
            onSearchChange={maps}
            results={list.list}
          />
          <Button
            style={{ marginTop: '25px' }}
            onClick={() => closeItemState('click')}
            fluid
          >
            Добавить
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

AddAddress.propTypes = {
  open: PropTypes.bool.isRequired,
  closeItem: PropTypes.func.isRequired,
};

export default AddAddress;
