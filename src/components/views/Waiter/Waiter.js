import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = (props) => {
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={process.env.PUBLIC_URL + '/tables/booking/new'}>
        New order
      </Link>
      <Link to={process.env.PUBLIC_URL + '/tables/booking/123'}>
        Edit order number: 123
      </Link>
    </div>
  );
};

export default Waiter;