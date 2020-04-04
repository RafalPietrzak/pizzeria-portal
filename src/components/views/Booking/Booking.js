import React from 'react';
import styles from './Booking.module.scss';
import PropTypes from 'prop-types';

const Booking = (props) => {
  return (
    <div className={styles.component}>
      <h2>Booking view</h2>
      {props.match.params.id
        ?`Edit booking number:${props.match.params.id}`
        :'New booking'
      }
    </div>
  );
};

Booking.propTypes = {
  match: PropTypes.object,
};

export default Booking;