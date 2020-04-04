import React from 'react';
import styles from './Order.module.scss';
import PropTypes from 'prop-types';

const Order = (props) => {
  return (
    <div className={styles.component}>
      <h2>Order view</h2>
      {props.match.params.id
        ?`Edit order number:${props.match.params.id}`
        :'Add new order'
      }
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;