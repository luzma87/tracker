import {
  Button, Card, CardActions, CardContent
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CustomIcon from '../_common/CustomIcon';
import CustomTextField from '../_common/CustomTextField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AccountsForm = ({
  selectedAccount, onDataChange, onCancel, onSave,
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <form
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <CustomTextField
            value={selectedAccount.name}
            id="name"
            label="Name"
            onChange={(event) => onDataChange(event)}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              name="type"
              value={selectedAccount.type}
              onChange={(event) => onDataChange(event)}
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="outcome">Outcome</MenuItem>
            </Select>
          </FormControl>
        </form>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onCancel()}>
          Cancel
      </Button>
        <Button
          size="small"
          color="primary"
          startIcon={<CustomIcon icon="save" />}
          onClick={() => onSave()}
        >
          Save
      </Button>
      </CardActions>
    </Card>
  );
}


AccountsForm.propTypes = {
  selectedStore: PropTypes.any,
  onDataChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

AccountsForm.defaultProps = {
  selectedStore: {},
  onDataChange: () => { },
  onCancel: () => { },
  onSave: () => { },
};

export default AccountsForm;
