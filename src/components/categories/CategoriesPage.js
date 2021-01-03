import { Button, Grid, Paper } from '@material-ui/core';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { compose } from 'recompose';
import conditions from '../../constants/conditions';
import categoriesHooks from '../../hooks/categoriesHooks';
import withFirebase from '../firebase/withFirebase';
import withAuthorization from '../session/withAuthorization';
import Content from '../_common/Content';
import CustomIcon from '../_common/CustomIcon';
import CategoriesForm from './CategoriesForm';
import CategoriesList from './CategoriesList';

const initialState = {
  name: '',
  max: '',
  description: '',
  deductible: false,
  color: '',
  icon: '',
  year: moment().year()
};

const createCategory = (firebase, userUid, category) => {
  const newCategory = { ...category };
  const newCategoryRef = firebase.userCategories(userUid).doc();
  newCategory.id = newCategoryRef.id;
  return newCategoryRef.set(newCategory);
};

const updateCategory = (firebase, userUid, category) =>
  firebase.userCategory(userUid, category.id).set(category);

const saveCategory = (firebase, userUid, newCategory) => {
  let promise;
  if (newCategory.id) {
    promise = updateCategory(firebase, userUid, newCategory);
  } else {
    promise = createCategory(firebase, userUid, newCategory);
  }
  promise
    .then(() => {
      console.log('category doc written with id');
    })
    .catch((error) => {
      console.log('error adding doc: ', error);
    });
};

const deleteCategory = (firebase, userUid, category) => {
  firebase.userCategory(userUid, category.id)
    .delete()
    .then(() => console.log('delete successful'))
    .catch((error) => console.log('error deleting: ', error));
};


const CategoriesPage = ({ firebase, authUser }) => {
  const userUid = authUser.uid;

  const { categories } = categoriesHooks.useUserCategories(firebase, userUid);

  const [selectedCategory, setSelectedCategory] = useState(initialState);
  const [isFormOpen, setFormOpen] = useState(false);

  const onDataChange = (event) => {
    const { name, checked, value } = event.target;
    if (name === 'deductible') {
      setSelectedCategory({ ...selectedCategory, [name]: checked });
    } else {
      setSelectedCategory({ ...selectedCategory, [name]: value });
    }
  };

  const handleDelete = (id, category) => {
    deleteCategory(firebase, userUid, category);
  };

  const resetState = () => {
    setSelectedCategory(initialState);
  };

  const handleCreate = () => {
    resetState();
    setFormOpen(true);
  };

  const handleEdit = (id, category) => {
    setFormOpen(true);
    setSelectedCategory(category);
  };

  const handleCancel = () => {
    resetState();
    setFormOpen(false);
  };

  const handleSave = () => {
    saveCategory(firebase, userUid, selectedCategory);
    handleCancel();
  };

  const getForm = () => {
    if (!isFormOpen) return null;
    return (
      <Grid item>
        <CategoriesForm
          onSave={() => handleSave()}
          onCancel={() => handleCancel()}
          onDataChange={(event) => onDataChange(event)}
          selectedCategory={selectedCategory}
        />
      </Grid>
    );
  };

  return (
    <Content>
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
            <CategoriesList
              categories={categories}
              selectedCategory={selectedCategory.id}
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

CategoriesPage.propTypes = {
  firebase: PropTypes.any.isRequired,
  authUser: PropTypes.any.isRequired,
}

export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(CategoriesPage);
