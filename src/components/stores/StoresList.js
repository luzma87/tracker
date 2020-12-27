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

const StoresList = ({
  stores, selectedStore, onClick, onEdit, onDelete, editIcon,
}) => {
  const listItemParams = {};
  return (
    <List>
      {stores.map((store, i) => {
        let iconSize = 24;
        if (onClick) {
          listItemParams.button = true;
          listItemParams.onClick = () => onClick(store);
          iconSize = 16;
        }
        if (selectedStore) {
          listItemParams.selected = selectedStore === store.id || selectedStore === i;
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

StoresList.propTypes = {
  stores: PropTypes.any.isRequired,
  selectedStore: PropTypes.string,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  editIcon: PropTypes.string,
};

StoresList.defaultProps = {
  selectedStore: null,
  onClick: null,
  onEdit: null,
  onDelete: null,
  editIcon: 'pencil',
};

export default StoresList;
