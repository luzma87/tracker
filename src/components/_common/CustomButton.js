/* eslint-disable react/jsx-props-no-spreading,no-unused-vars */
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import customLink from '../navigation/customLink';

const CustomButton = forwardRef(({ label, ...rest }, ref) => (
  <Button {...rest}>
    {label}
  </Button>
));

CustomButton.propTypes = {
  label: PropTypes.any.isRequired,
};

export default CustomButton;
