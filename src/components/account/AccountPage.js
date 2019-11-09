import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'recompose';
import conditions from '../../constants/conditions';
import CardTitle from '../_common/CardTitle';
import Content from '../_common/Content';
import PageTitle from '../_common/PageTitle';
import PasswordChangeForm from '../passwordChange/PasswordChangeForm';
import withAuthorization from '../session/withAuthorization';

const AccountPage = ({ authUser }) => (
  <Content>
    <Grid item xs={12} className="title">
      <PageTitle label="Mi cuenta" icon="user" />
    </Grid>

    <Grid item xs={12} sm={10} md={11} lg={8} xl={6}>
      <Paper style={{ padding: 16 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CardTitle label="Cambiar password" icon="unlock-alt" />
          </Grid>
          <Grid item xs={12}>
            <PasswordChangeForm user={authUser} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Content>
);

AccountPage.propTypes = {
  authUser: PropTypes.shape({}).isRequired,
};

export default compose(
  withAuthorization(conditions.isLoggedUser),
)(AccountPage);
