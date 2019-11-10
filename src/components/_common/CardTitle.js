import { Typography } from '@material-ui/core';
import { withTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CustomHighlighter from './CustomHighlighter';
import CustomIcon from './CustomIcon';

const CardTitle = ({
  label, icon, textFilter, isActive, theme,
}) => {
  const getIconColor = () => {
    if (isActive === null) return 'black';
    return (isActive ? theme.palette.active[500] : theme.palette.inactive[500]);
  };

  return (
    <Typography variant="h5" gutterBottom>
      <CustomIcon
        icon={icon}
        style={{ marginRight: 16 }}
        color={getIconColor(isActive)}
      />
      <CustomHighlighter filter={[textFilter]} text={label} />
    </Typography>
  );
};

CardTitle.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  textFilter: PropTypes.string,
  theme: PropTypes.any.isRequired,
};

CardTitle.defaultProps = {
  textFilter: '',
  isActive: null,
};

export default withTheme(CardTitle);
