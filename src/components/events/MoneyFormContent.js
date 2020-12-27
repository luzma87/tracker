import {
  Button
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { cloneDeep } from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import CustomIcon from '../_common/CustomIcon';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const initialState = (stores, config) => ({
  store: cloneDeep(stores[0]),
  categories: cloneDeep(config.categories)
});

const MoneyFormContent = ({ stores, config, onChangeToCalendar, onMoneySave, }) => {
  const classes = useStyles();

  const [state, setState] = useState(initialState(stores, config));

  const handleStoreChange = (ev) => {
    setState({ ...state, store: ev.target.value });
  }

  const handleChange = (event) => {
    const newCategories = cloneDeep(state.categories);
    const n = newCategories.find(c => c.name === event.target.name)
    n.value = parseFloat(event.target.value);
    setState({ ...state, categories: newCategories });
  };
  console.log({ state });
  return (
    <Fragment>
      <Button
        variant="contained" color="secondary"
        endIcon={<CustomIcon icon="calendar" />}
        style={{ marginBottom: 8 }}
        onClick={onChangeToCalendar}
      />
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="selectedStore">Store</InputLabel>
          <Select
            labelId="selectedStore"
            id="selectStore"
            value={state.store}
            onChange={handleStoreChange}
          >
            {stores.map(store => (
              <MenuItem key={store.ruc} value={store}>{store.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Expenses</FormLabel>
          <FormGroup>
            {state.categories.map(cat => (
              <TextField
                key={cat.name}
                label={cat.name}
                name={cat.name}
                value={cat.value || 0}
                type="number"
                onChange={handleChange}
              />
            ))}
          </FormGroup>
        </FormControl>
        <Button
          variant="contained" color="primary"
          endIcon={<CustomIcon icon="save" />}
          style={{ marginBottom: 8 }}
          onClick={() => onMoneySave(state)}
        />
      </div>
    </Fragment>
  )
}

MoneyFormContent.propTypes = {
  onChangeToCalendar: PropTypes.func,
  onMoneySave: PropTypes.func,
  stores: PropTypes.array,
  config: PropTypes.object,
}


export default MoneyFormContent;
