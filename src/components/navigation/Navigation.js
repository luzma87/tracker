import { AppBar, Toolbar } from '@material-ui/core';
import { withTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import routes from '../../constants/routes';
import AuthUserContext from '../session/context';
import SignOutButton from '../signOut/SignOutButton';
import NavBarIconButton from './NavBarIconButton';
import NavBarTextLink from './NavBarTextLink';

const NavigationAuth = () => (
  <AppBar position="static" className="root" data-cy="navbar">
    <Toolbar style={{ justifyContent: 'space-between' }}>
      <div className="navbar-part">
        <NavBarTextLink to={routes.HOME} text="Tracker" />
        <NavBarIconButton id="tracker" title="Tracker" icon="calendar-star" to={routes.HOME} />
        <NavBarIconButton id="list" title="List" icon="calendar" to={routes.LIST_EVENTS} />
        <NavBarIconButton id="events" title="Events" icon="calendar-day" to={routes.EVENTS} />
        <NavBarIconButton id="stores" title="Stores" icon="store" to={routes.STORES} />
        <NavBarIconButton id="accounts" title="Accounts" icon="money" to={routes.ACCOUNTS} />
        <NavBarIconButton id="categories" title="Categories" icon="categories" to={routes.CATEGORIES} />
      </div>

      <div className="navbar-part">
        <NavBarIconButton id="my-account" title="Mi cuenta" icon="user" to={routes.ACCOUNT} color="white" />
        <SignOutButton />
      </div>
    </Toolbar>
  </AppBar>
);

NavigationAuth.propTypes = {
};

const Navigation = ({ theme }) => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser
        ? <NavigationAuth authUser={authUser} theme={theme} />
        : null)}
    </AuthUserContext.Consumer>
  </div>
);

Navigation.propTypes = {
  theme: PropTypes.any.isRequired,
};

export default withTheme(Navigation);
