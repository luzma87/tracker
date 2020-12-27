import { IconButton, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import withFirebase from '../firebase/withFirebase';
import CustomIcon from '../_common/CustomIcon';

const SignOutButton = ({ firebase }) => (
  <Tooltip title="Salir">
    <IconButton
      data-cy="logout-nav-button"
      aria-label="Salir"
      color="inherit"
      onClick={() => firebase.doSignOut()}
    >
      <CustomIcon icon="logout" style={{ color: 'white' }} />
    </IconButton>
  </Tooltip>
);

SignOutButton.propTypes = {
  firebase: PropTypes.any.isRequired,
};

export default withFirebase(SignOutButton);
