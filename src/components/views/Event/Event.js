import React from 'react';
import styles from './Event.module.scss';
import PropTypes from 'prop-types';

const Event = (props) => {
  return (
    <div className={styles.component}>
      <h2>Event view</h2>
      {props.match.params.id
        ?`Edit event number:${props.match.params.id}`
        :'Add new event'
      }
    </div>
  );
};

Event.propTypes = {
  match: PropTypes.object,
};

export default Event;