import PropTypes from 'prop-types';
import React from 'react';
import CustomButton from '../_common/CustomButton';
import CustomIcon from '../_common/CustomIcon';

const NavBarHybridButton = ({
  title, icon, to, color,
}) => (
  <CustomButton color={color} to={to}>
    <CustomIcon icon={icon} style={{ marginRight: 8 }} />
    {title}
  </CustomButton>
);

NavBarHybridButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
};

NavBarHybridButton.defaultProps = {
  color: 'inherit',
};

export default NavBarHybridButton;
