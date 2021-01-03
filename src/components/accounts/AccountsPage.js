import { Button, Grid, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { compose } from 'recompose';
import conditions from '../../constants/conditions';
import accountsHooks from '../../hooks/accountsHooks';
import withFirebase from '../firebase/withFirebase';
import withAuthorization from '../session/withAuthorization';
import Content from '../_common/Content';
import CustomIcon from '../_common/CustomIcon';
import AccountsForm from './AccountsForm';
import AccountsList from './AccountsList';

const initialState = {
  name: '',
  type: 'outcome',
  color: '',
  icon: ''
};

const createAccount = (firebase, userUid, account) => {
  const newAccount = { ...account };
  const newAccountRef = firebase.userAccounts(userUid).doc();
  newAccount.id = newAccountRef.id;
  return newAccountRef.set(newAccount);
};

const updateAccount = (firebase, userUid, account) =>
  firebase.userAccount(userUid, account.id).set(account);

const saveAccount = (firebase, userUid, newAccount) => {
  let promise;
  if (newAccount.id) {
    promise = updateAccount(firebase, userUid, newAccount);
  } else {
    promise = createAccount(firebase, userUid, newAccount);
  }
  promise
    .then(() => {
      console.log('account doc written with id');
    })
    .catch((error) => {
      console.log('error adding doc: ', error);
    });
};

const deleteAccount = (firebase, userUid, account) => {
  firebase.userAccount(userUid, account.id)
    .delete()
    .then(() => console.log('delete successful'))
    .catch((error) => console.log('error deleting: ', error));
};


const AccountsPage = ({ firebase, authUser }) => {
  const userUid = authUser.uid;

  const { accounts } = accountsHooks.useUserAccounts(firebase, userUid);

  const [selectedAccount, setSelectedAccount] = useState(initialState);
  const [isFormOpen, setFormOpen] = useState(false);

  const onDataChange = (event) => {
    const { name, checked, value } = event.target;
    if (name === 'deductible') {
      setSelectedAccount({ ...selectedAccount, [name]: checked });
    } else {
      setSelectedAccount({ ...selectedAccount, [name]: value });
    }
  };

  const handleDelete = (id, account) => {
    deleteAccount(firebase, userUid, account);
  };

  const resetState = () => {
    setSelectedAccount(initialState);
  };

  const handleCreate = () => {
    resetState();
    setFormOpen(true);
  };

  const handleEdit = (id, account) => {
    setFormOpen(true);
    setSelectedAccount(account);
  };

  const handleCancel = () => {
    resetState();
    setFormOpen(false);
  };

  const handleSave = () => {
    saveAccount(firebase, userUid, selectedAccount);
    handleCancel();
  };

  const getForm = () => {
    if (!isFormOpen) return null;
    return (
      <Grid item>
        <AccountsForm
          onSave={() => handleSave()}
          onCancel={() => handleCancel()}
          onDataChange={(event) => onDataChange(event)}
          selectedAccount={selectedAccount}
        />
      </Grid>
    );
  };

  return (
    <Content>
      <Typography variant="h5" color="primary">
        Accounts
      </Typography>
      <Grid container>
        <Grid item style={{ marginRight: 24 }}>
          <Paper>
            <Button
              startIcon={<CustomIcon icon="money" />}
              color="primary"
              variant="outlined"
              style={{ width: '100%' }}
              onClick={() => handleCreate()}
            >
              New
            </Button>
            <AccountsList
              accounts={accounts}
              selectedAccount={selectedAccount.id}
              onEdit={(id, store) => handleEdit(id, store)}
              onDelete={(id, store) => handleDelete(id, store)}
            />
          </Paper>
        </Grid>
        {getForm()}
      </Grid>
    </Content>
  )
}

AccountsPage.propTypes = {
  firebase: PropTypes.any.isRequired,
  authUser: PropTypes.any.isRequired,
}

export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(AccountsPage);
