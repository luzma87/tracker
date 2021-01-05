import { Button, Grid, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { compose } from 'recompose';
import conditions from '../../constants/conditions';
import storesHooks from '../../hooks/storesHooks';
import withFirebase from '../firebase/withFirebase';
import withAuthorization from '../session/withAuthorization';
import Content from '../_common/Content';
import CustomIcon from '../_common/CustomIcon';
import StoreForm from './StoreForm';
import StoresList from './StoresList';

const initialState = {
  name: '',
  legalName: '',
  ruc: ''
};

const createStore = (firebase, userUid, event) => {
  const newStore = { ...event };
  const newStoreRef = firebase.userStores(userUid).doc();
  newStore.id = newStoreRef.id;
  return newStoreRef.set(newStore);
};

const updateStore = (firebase, userUid, store) => firebase.userStore(userUid, store.id).set(store);

const saveStore = (firebase, userUid, newStore) => {
  let promise;
  if (newStore.id) {
    promise = updateStore(firebase, userUid, newStore);
  } else {
    promise = createStore(firebase, userUid, newStore);
  }
  promise
    .then(() => {
      console.log('doc written with id');
    })
    .catch((error) => {
      console.log('error adding doc: ', error);
    });
};

const deleteStore = (firebase, userUid, store) => {
  firebase.userStore(userUid, store.id)
    .delete()
    .then(() => console.log('delete successful'))
    .catch((error) => console.log('error deleting: ', error));
};

const StoresPage = ({ firebase, authUser }) => {
  const userUid = authUser.uid;
  const { stores } = storesHooks.useUserStores(firebase, userUid);
  const [selectedStore, setSelectedStore] = useState(initialState);
  const [isFormOpen, setFormOpen] = useState(false);

  const onDataChange = (event) => {
    setSelectedStore({ ...selectedStore, [event.target.name]: event.target.value });
  };

  const handleDelete = (id, store) => {
    deleteStore(firebase, userUid, store);
  };

  const resetState = () => {
    setSelectedStore(initialState);
  };

  const handleCreate = () => {
    resetState();
    setFormOpen(true);
  };

  const handleEdit = (id, store) => {
    setFormOpen(true);
    setSelectedStore(store);
  };

  const handleCancel = () => {
    resetState();
    setFormOpen(false);
  };

  const handleSave = () => {
    saveStore(firebase, userUid, selectedStore);
    handleCancel();
  };

  const getForm = () => {
    if (!isFormOpen) return null;
    return (
      <Grid item>
        <StoreForm
          onSave={() => handleSave()}
          onCancel={() => handleCancel()}
          onDataChange={(event) => onDataChange(event)}
          selectedStore={selectedStore}
        />
      </Grid>
    );
  };

  return (
    <Content>
      <Typography variant="h5" color="primary">
        Stores
      </Typography>
      <Grid container>
        <Grid item style={{ marginRight: 24 }}>
          <Paper>
            <Button
              startIcon={<CustomIcon icon="store" />}
              color="primary"
              variant="outlined"
              style={{ width: '100%' }}
              onClick={() => handleCreate()}
            >
              New
            </Button>
            <StoresList
              stores={stores}
              selectedStore={selectedStore.id}
              onEdit={(id, store) => handleEdit(id, store)}
              onDelete={(id, store) => handleDelete(id, store)}
            />
          </Paper>
        </Grid>
        {getForm()}
      </Grid>
    </Content>
  )
};

StoresPage.propTypes = {
  firebase: PropTypes.any.isRequired,
  authUser: PropTypes.any.isRequired,
};

StoresPage.defaultProps = {};

export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(StoresPage);
