import React from 'react';
import routes from '../../constants/routes';
import CustomButton from '../_common/CustomButton';

const PasswordForgetLink = () => (
  <CustomButton to={routes.PASSWORD_FORGET} label="Olvidé mi password" />
);

export default PasswordForgetLink;
