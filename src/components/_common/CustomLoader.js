import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import CustomIcon from './CustomIcon';

const CustomLoader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <Typography color="secondary">
      <CustomIcon icon="spinner" pulse size="4x" />
    </Typography>
  );
};

CustomLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default CustomLoader;
