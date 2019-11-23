import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendarDay,
  faCalendarEdit,
  faCalendarPlus,
  faCalendarStar,
  faCalendarTimes,
  faGhost,
  faRepeat,
  faSave,
  faSignInAlt,
  faSignOutAlt,
  faSpinner,
  faTrashAlt,
  faUndo,
  faUnlockAlt,
  faUser,
} from '@fortawesome/pro-regular-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import FirebaseContext from './components/firebase/context';
import Firebase from './components/firebase/firebase';
import './index.css';
import * as serviceWorker from './serviceWorker';

library.add(
  faSignInAlt, faSignOutAlt, faSave, faSpinner, faGhost, faRepeat,
  faUndo, faUnlockAlt, faUser, faTrashAlt,
  faCalendarStar, faCalendarDay, faCalendarTimes, faCalendarPlus, faCalendarEdit,

);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
