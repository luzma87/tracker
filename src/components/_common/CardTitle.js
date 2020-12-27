import { Typography } from '@material-ui/core';
import { withTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CustomHighlighter from './CustomHighlighter';
import CustomIcon from './CustomIcon';

const CardTitle = ({
  label, icon, textFilter,
}) => (
  <Typography variant="h5" gutterBottom>
    <CustomIcon
      icon={icon}
      style={{ marginRight: 16 }}
    />
    <CustomHighlighter filter={[textFilter]} text={label} />
  </Typography>
);

CardTitle.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  textFilter: PropTypes.string,
};

CardTitle.defaultProps = {
  textFilter: '',
};

export default withTheme(CardTitle);
