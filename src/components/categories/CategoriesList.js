/* eslint-disable react/no-array-index-key,react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton, List, ListItem, ListItemText,
} from '@material-ui/core';
import CustomIcon from '../_common/CustomIcon';

const getDeleteButton = (id, store, onDelete) => {
  if (!onDelete) return null;
  return (
    <IconButton size="small" color="primary" onClick={() => onDelete(id, store)}>
      <CustomIcon icon="delete" />
    </IconButton>
  );
};

const getEditButton = (id, store, onEdit, editIcon) => {
  if (!onEdit) return null;
  return (
    <IconButton size="small" color="primary" onClick={() => onEdit(id, store)}>
      <CustomIcon icon={editIcon} />
    </IconButton>
  );
};

const CategoriesList = ({
  categories, selectedCategory, onClick, onEdit, onDelete, editIcon,
}) => {
  const listItemParams = {};
  return (
    <List>
      {categories.map((store, i) => {
        if (onClick) {
          listItemParams.button = true;
          listItemParams.onClick = () => onClick(store);
        }
        if (selectedCategory) {
          listItemParams.selected = selectedCategory === store.id || selectedCategory === i;
        }
        return (
          <ListItem dense key={`${store.name}_${i}`} {...listItemParams}>
            <ListItemText primary={store.name} style={{ marginRight: 8 }} />
            {getEditButton(i, store, onEdit, editIcon)}
            {getDeleteButton(i, store, onDelete)}
          </ListItem>
        );
      })}
    </List>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.any.isRequired,
  selectedCategory: PropTypes.string,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  editIcon: PropTypes.string,
};

CategoriesList.defaultProps = {
  selectedCategory: null,
  onClick: null,
  onEdit: null,
  onDelete: null,
  editIcon: 'pencil',
};

export default CategoriesList;
