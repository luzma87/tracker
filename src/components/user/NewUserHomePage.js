import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { compose } from 'recompose';
import conditions from '../../constants/conditions';
import withFirebase from '../firebase/withFirebase';
import withAuthorization from '../session/withAuthorization';
import Content from '../_common/Content';
import usersHooks from '../../hooks/usersHooks';

// const saveUser = (firebase, newUser) => {
//   firebase.user(newUser.uid)
//     .set(newUser)
//     .then(() => {
//       console.log('doc written with id');
//     })
//     .catch((error) => {
//       console.log('error adding doc: ', error);
//     });
// };

const NewUserHomePage = ({ firebase, authUser }) => {
  const id = authUser.uid;
  const { isLoading, user } = usersHooks.useUser(firebase, id);

  if (user && !isLoading) {
    const newEvents = {};
    const myEvents = {};
    const { years } = user;
    Object.entries(years).forEach(([year, months]) => {
      Object.entries(months).forEach(([month, days]) => {
        Object.entries(days).forEach(([day, { comments, date, events }]) => {
          if (comments || events.length > 0) {
            if (!newEvents[year]) newEvents[year] = {};
            if (!newEvents[year][month]) newEvents[year][month] = {};
            const newDate = moment().year(year).month(month - 1).date(day)
              .format('YYYY-MM-DD');
            newEvents[year][month][day] = {
              comments, date, events, newDate,
            };
            if (events.length > 0) {
              events.forEach((event) => {
                const key = `${event.content}_${event.color}_${event.name}`;
                myEvents[key] = event;
              });
            }
          }
        });
      });
    });
    newEvents.name = 'Default tracker';
    newEvents.availableEvents = myEvents;
    console.log(newEvents);
    const newUser = cloneDeep(user);
    if (!newUser.userEvents) newUser.userEvents = [];
    newUser.userEvents[0] = newEvents;
    // saveUser(firebase, newUser);
  }

  return (
    <Content>
      Hello
    </Content>
  );
};

NewUserHomePage.propTypes = {
  firebase: PropTypes.any.isRequired,
  authUser: PropTypes.any.isRequired,
};

NewUserHomePage.defaultProps = {};

export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(NewUserHomePage);
