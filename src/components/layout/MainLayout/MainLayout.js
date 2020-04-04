import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

const MainLayout = (props) => {
  return (
    <div>
      <PageNav></PageNav>
      {props.children}
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;