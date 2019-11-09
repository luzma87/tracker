import { Grid, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PasswordForgetLink from '../passwordForget/PasswordForgetLink';
import SignInForm from './SignInForm';
import withFirebase from '../firebase/withFirebase';

const SignInPage = ({ firebase }) => {
  useEffect(() => {
    firebase.doSignOut();
  });

  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={9} md={6} lg={6} xl={6}>
        <Paper
          style={{
            marginTop: 40, padding: 24, textAlign: 'center',
          }}
        >
          <Typography gutterBottom color="primary" variant="h4">
            <FontAwesomeIcon icon={['far', 'calendar-star']} style={{ marginRight: 8 }} />
            Tracker
          </Typography>
          <SignInForm />
          <div style={{ textAlign: 'right' }}>
            <PasswordForgetLink />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

SignInPage.propTypes = {
  firebase: PropTypes.any.isRequired,
};

export default withFirebase(SignInPage);
