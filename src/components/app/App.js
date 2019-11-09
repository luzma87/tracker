import {
  amber, green, grey, purple, red,
} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../../constants/routes';
import AccountPage from '../account/AccountPage';
import Navigation from '../navigation/Navigation';
import PasswordForgetPage from '../passwordForget/PasswordForgetPage';
import withAuthentication from '../session/withAuthentication';
import SignInPage from '../signIn/SignInPage';
import HomePage from '../home/HomePage';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: amber,
    active: green,
    inactive: red,
    titleButton: grey,
  },
  icons: {
    building: 'warehouse',
    place: 'draw-square',
    user: 'user-astronaut',
    admin: 'alicorn',
    car: 'rocket',
  },
});
const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navigation />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.SIGN_IN} component={SignInPage} />
      <Route path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={routes.ACCOUNT} component={AccountPage} />
    </ThemeProvider>
  </BrowserRouter>
);

export default withAuthentication(App);
