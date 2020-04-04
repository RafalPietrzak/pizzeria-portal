import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = (props) => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <nav>
        <Link to={process.env.PUBLIC_URL + '/tables/booking/new'}>
          New booking
        </Link>
        <Link to={process.env.PUBLIC_URL + '/tables/booking/123'}>
          Edit booking number: 123
        </Link>
        <Link to={process.env.PUBLIC_URL + '/tables/events/new'}>
          New event
        </Link>
        <Link to={process.env.PUBLIC_URL + '/tables/events/123'}>
          Edit event number: 123
        </Link>
      </nav>
    </div>
  );
};

export default Tables;