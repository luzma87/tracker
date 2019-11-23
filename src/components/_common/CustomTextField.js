/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const CustomTextField = (props) => {
  const { margin, id, ...other } = props;
  const style = margin ? { marginBottom: 16 } : {};
  return (
    <TextField
      {...other}
      name={id}
      variant="outlined"
      style={style}
    />
  );
};

CustomTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  margin: PropTypes.bool,
};

CustomTextField.defaultProps = {
  margin: true,
};

export default CustomTextField;
