import React from 'react';
import {
  Modal,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-cycle
import Item from '../Item/Item';

const ItemModal = ({ open, closeItem }) => (
  <Modal open={open} onClose={closeItem}>
    <Modal.Content>
      <Modal.Description>
        <Item />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

ItemModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeItem: PropTypes.func.isRequired,
};

export default ItemModal;
