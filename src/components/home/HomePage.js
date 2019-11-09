import React from 'react';
import { compose } from 'recompose';
import conditions from '../../constants/conditions';
import withAuthorization from '../session/withAuthorization';
import Content from '../_common/Content';

const HomePage = () => <Content>Home!</Content>;

export default compose(
  withAuthorization(conditions.isLoggedUser),
)(HomePage);
