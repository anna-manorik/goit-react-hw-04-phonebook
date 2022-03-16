import React from 'react';
import PropTypes from 'prop-types';
import NameItem from '../NameItem/NameItem';
import styles from './nameList.module.css';

const NameList = ({ visibleContacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {visibleContacts.map(({ id, name, number }) => (
      <NameItem
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

NameList.propTypes = {
  visibleContacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default NameList;
