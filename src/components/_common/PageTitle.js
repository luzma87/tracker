import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from '@material-ui/styles';
import CustomIcon from './CustomIcon';

const PageTitle = ({ label, icon, theme }) => (
  <>
    <div
      className="title-icon"
      style={{
        background: theme.palette.titleButton[400],
        color: theme.palette.primary.dark,
        boxShadow: `-2px -0px 3px ${theme.palette.primary.dark}`,
      }}
    >
      <CustomIcon icon={icon} style={{ marginLeft: 2 }} />
    </div>
    <Typography variant="h4" className="title-text" color="primary">
      {label}
    </Typography>
  </>
);

PageTitle.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  theme: PropTypes.any.isRequired,
};

PageTitle.defaultProps = {
  icon: '',
};

export default withTheme(PageTitle);
