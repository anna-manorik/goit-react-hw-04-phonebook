import React from 'react';
import PropTypes from 'prop-types';
import styles from './nameItem.module.css';

const NameItem = ({ id, name, number, onDeleteContact }) => (
 
      <li key={id} className={styles.item}>
        {name}: {number}
        <button className={styles.button} onClick={() => onDeleteContact(id)}>
          Delete contact
        </button>
      </li>
 
);

NameItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDeleteContact: PropTypes.func,
};

export default NameItem;
