import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import CustomHighlighter from './CustomHighlighter';
import CustomIcon from './CustomIcon';

const TextWithIcon = ({
  text, textFilter, icon,
}) => (
  <Typography variant="body2" component="p">
    <CustomIcon icon={icon} fixedWidth style={{ marginRight: 8 }} />
    <CustomHighlighter filter={[textFilter]} text={text} />
  </Typography>
);

TextWithIcon.propTypes = {
  text: PropTypes.string,
  textFilter: PropTypes.string,
  icon: PropTypes.string,
};

TextWithIcon.defaultProps = {
  text: '',
  textFilter: '',
  icon: 'alicorn',
};

export default TextWithIcon;
