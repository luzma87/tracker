/* eslint-disable react/jsx-props-no-spreading */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/styles';

const CustomIcon = ({
  icon, ...rest
}) => {
  const getIcon = () => ['far', icon];
  return (
    <FontAwesomeIcon icon={getIcon(icon)} {...rest} />
  );
};

CustomIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default withTheme(CustomIcon);
