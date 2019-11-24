/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const CustomTextField = (props) => {
  const {
    margin, id, style, ...other
  } = props;
  const usedStyle = margin ? { marginBottom: 16, ...style } : style;
  return (
    <TextField
      {...other}
      name={id}
      variant="outlined"
      style={usedStyle}
    />
  );
};

CustomTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  margin: PropTypes.bool,
  style: PropTypes.any,
};

CustomTextField.defaultProps = {
  margin: true,
  style: {},
};

export default CustomTextField;
