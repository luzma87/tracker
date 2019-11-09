import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBarTextLink = ({ text, to }) => (
  <Typography variant="h6" color="inherit" style={{ marginRight: 8 }}>
    <Link to={to} style={{ color: 'white', textDecoration: 'none' }}>
      {text}
    </Link>
  </Typography>
);

NavBarTextLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

NavBarTextLink.defaultProps = {};

export default NavBarTextLink;
