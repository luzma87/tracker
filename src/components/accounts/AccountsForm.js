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
import { SketchPicker } from 'react-color';
import CustomIcon from '../_common/CustomIcon';
import CustomTextField from '../_common/CustomTextField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const AccountsForm = ({
  selectedAccount, onDataChange, onCancel, onSave,
}) => {
  const classes = useStyles();
  const onChangeComplete = (color) => {
    const newEvent = {
      target: {
        name: 'color',
        value: color.hex,
      },
    };
    onDataChange(newEvent);
  };
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
          <CustomTextField
            value={selectedAccount.icon}
            id="icon"
            label="Icon"
            onChange={(event) => onDataChange(event)}
          />
          <SketchPicker
            color={selectedAccount.color}
            onChangeComplete={onChangeComplete}
            presetColors={[
              '#F78DA7', '#EB144C', '#D0021B',
              '#F8E71C', '#FCB900', '#F5A623', '#FF6900', '#8B572A',
              '#B8E986', '#7ED321', '#417505',
              '#50E3C2', '#7BDCB5', '#00D084',
              '#4A90E2', '#8ED1FC',
              '#BD10E0', '#9013FE', '#9900EF',
              '#ABB8C3', '#9B9B9B', '#4A4A4A',
            ]}
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
