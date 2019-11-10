import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { compose } from 'recompose';
import conditions from '../../constants/conditions';
import withFirebase from '../firebase/withFirebase';
import withAuthorization from '../session/withAuthorization';
import Content from '../_common/Content';
import YearGrid from './YearGrid';
import EventForm from './EventForm';
import usersHooks from '../../hooks/usersHooks';
import eventsHooks from '../../hooks/eventsHooks';

const saveUser = (firebase, newUser) => {
  firebase.user(newUser.uid)
    .set(newUser)
    .then(() => {
      console.log('doc written with id');
    })
    .catch((error) => {
      console.log('error adding doc: ', error);
    });
};

const UserHomePage = ({ firebase }) => {
  const id = 'qwO8vGhNnzL76lJs4ZQToma92Oo1';
  const { isLoading, user } = usersHooks.useUser(firebase, id);
  const { events } = eventsHooks.useEvents(firebase);
  const [year] = useState(moment().year());
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  let userYear = null;

  if (user && !isLoading) {
    userYear = user.events[year];
    if (!userYear) {
      const thisYear = {};
      for (let month = 1; month <= 12; month += 1) {
        const daysNum = moment(`${year}-${month}`, 'YYYY-M').daysInMonth();
        thisYear[month] = {};
        for (let day = 1; day <= daysNum; day += 1) {
          thisYear[month][day] = {
            date: { month, day, year },
            events: [],
          };
        }
      }
      const newUser = { ...user };
      newUser.events[year] = thisYear;
      saveUser(firebase, newUser);
    }
  }

  const handleFormClose = () => {
    setFormOpen(false);
    setSelectedDay(null);
    setSelectedEvent(null);
  };

  const handleDayClick = (m, d) => {
    // const selectedMoment = moment(`${year}-${m}-${d}`, 'YYYY-M-D');
    const clickedDay = user.events[year][m][d];
    // const hasEvents = clickedDay.events.length;
    setSelectedDay(clickedDay);
    // setSelectedDay(selectedMoment);
    // if (!hasEvents) {
    setFormOpen(true);
    // }
  };

  const handleEventSelection = (selectedEventObj) => {
    setSelectedEvent(selectedEventObj);
  };

  const handleSave = () => {
    const newUser = { ...user };
    const newSelectedEvent = { ...selectedEvent };
    delete newSelectedEvent.id;
    const eventsList = newUser.events[year][selectedDay.date.month][selectedDay.date.day].events;
    eventsList.push(newSelectedEvent);
    saveUser(firebase, newUser);
    handleFormClose();
  };

  return (
    <Content>
      {selectedDay ? (
        <EventForm
          open={isFormOpen}
          handleClose={() => handleFormClose()}
          handleSave={() => handleSave()}
          day={selectedDay}
          events={events}
          selectedEvent={selectedEvent}
          handleEventSelection={(event) => handleEventSelection(event)}
        />
      ) : null}
      <YearGrid
        months={userYear}
        year={year}
        handleClick={(month, day) => handleDayClick(month, day)}
      />
    </Content>
  );
};

UserHomePage.propTypes = {
  firebase: PropTypes.any.isRequired,
};

UserHomePage.defaultProps = {};

export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(UserHomePage);
