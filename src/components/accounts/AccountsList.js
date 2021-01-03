/* eslint-disable react/no-array-index-key,react/jsx-props-no-spreading */
import {
  IconButton, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
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


const accountStyle = (account, size) => ({
  background: account.color,
  width: size,
  height: size,
  padding: 4,
  marginRight: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const AccountsList = ({
  accounts, selectedAccount, onClick, onEdit, onDelete, editIcon,
}) => {
  const listItemParams = {};
  return (
    <List>
      {accounts.map((account, i) => {
        if (onClick) {
          listItemParams.button = true;
          listItemParams.onClick = () => onClick(account);
        }
        if (selectedAccount) {
          listItemParams.selected = selectedAccount === account.id || selectedAccount === i;
        }
        return (
          <ListItem dense key={`${account.name}_${i}`} {...listItemParams}>
            <div style={accountStyle(account, 24)}>{account.icon}</div>
            <ListItemText
              primary={`${account.name} (${account.type === 'income' ? '+' : '-'})`}
              style={{ marginRight: 8 }} />
            {getEditButton(i, account, onEdit, editIcon)}
            {getDeleteButton(i, account, onDelete)}
          </ListItem>
        );
      })}
    </List>
  );
};

AccountsList.propTypes = {
  accounts: PropTypes.any.isRequired,
  selectedAccount: PropTypes.string,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  editIcon: PropTypes.string,
};

AccountsList.defaultProps = {
  selectedAccount: null,
  onClick: null,
  onEdit: null,
  onDelete: null,
  editIcon: 'pencil',
};

export default AccountsList;
