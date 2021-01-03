import {
  Button
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { cloneDeep } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import { compose } from 'recompose';
import conditions from '../../constants/conditions';
import accountsHooks from '../../hooks/accountsHooks';
import categoriesHooks from '../../hooks/categoriesHooks';
import storesHooks from '../../hooks/storesHooks';
import withFirebase from '../firebase/withFirebase';
import withAuthorization from '../session/withAuthorization';
import CustomIcon from '../_common/CustomIcon';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const initialState = (stores, accounts, categories) => {
  const year = moment().year();
  const filteredCategories = categories.filter(c => c.year.toString() === year.toString());
  return ({
    store: cloneDeep(stores[0]),
    account: cloneDeep(accounts[0]),
    categories: cloneDeep(filteredCategories)
  });
}

const MoneyFormContent = ({ onChangeToCalendar, onMoneySave, firebase, authUser, }) => {
  const id = authUser.uid;
  const classes = useStyles();

  const { categories } = categoriesHooks.useUserCategories(firebase, id);
  const { stores } = storesHooks.useUserStores(firebase, id);
  const { accounts } = accountsHooks.useUserAccounts(firebase, id);

  const [state, setState] = useState({ store: {}, account: {}, categories: [] });

  useEffect(() => {
    setState(initialState(stores, accounts, categories));
  }, [stores, accounts, categories])

  const handleComboChange = (ev) => {
    setState({ ...state, [ev.target.name]: ev.target.value });
  }

  const handleChange = (event) => {
    const newCategories = cloneDeep(state.categories);
    const n = newCategories.find(c => c.name === event.target.name)
    n.value = parseFloat(event.target.value);
    setState({ ...state, categories: newCategories });
  };

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
          <InputLabel id="storeLabel">Store</InputLabel>
          <Select
            labelId="storeLabel"
            id="store"
            name="store"
            value={state.store}
            onChange={handleComboChange}
          >
            {stores.map(store => (
              <MenuItem key={store.ruc} value={store}>{store.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="accountLabel">Account</InputLabel>
          <Select
            labelId="accountLabel"
            id="account"
            name="account"
            value={state.account}
            onChange={handleComboChange}
          >
            {accounts.map(account => (
              <MenuItem key={account.ruc} value={account}>
                {`${account.name} (${account.type === 'income' ? '+' : '-'})`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Expenses</FormLabel>
          <FormGroup>
            {state.categories.map(cat => (
              <TextField
                key={cat.name}
                label={`${cat.name} ${cat.deductible ? 'deductible' : ''}`}
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
  config: PropTypes.object,
  firebase: PropTypes.any.isRequired,
  authUser: PropTypes.any.isRequired,
}


export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(MoneyFormContent);
