import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { compose } from 'recompose';
import { cloneDeep } from 'lodash';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import conditions from '../../constants/conditions';
import withFirebase from '../firebase/withFirebase';
import withAuthorization from '../session/withAuthorization';
import Content from '../_common/Content';
import YearGrid from './YearGrid';
import DayEventsForm from '../events/DayEventsForm';
import usersHooks from '../../hooks/usersHooks';
import eventsHooks from '../../hooks/eventsHooks';

const getEventsList = (user, date) => user.years[date.year][date.month][date.day].events;

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

const UserHomePage = ({ firebase, authUser }) => {
  const id = authUser.uid;
  const { isLoading, user } = usersHooks.useUser(firebase, id);
  const { events } = eventsHooks.useUserEvents(firebase, id);
  const [year, setYear] = useState(moment().year());
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [comments, setComments] = useState('');

  let userYear = null;
  let yearsSelect = [];

  if (user && !isLoading) {
    if (user.years && user.years[year]) {
      userYear = user.years[year];
      yearsSelect = Object.keys(user.years);
      const newYear = parseInt(yearsSelect[0], 10) + yearsSelect.length;
      yearsSelect.push(newYear.toString());
    }
    if (!user.years || !user.years[year]) {
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
      const newUser = cloneDeep(user);
      if (!newUser.years) newUser.years = {};
      newUser.years[year] = thisYear;
      saveUser(firebase, newUser);
      yearsSelect = [year.toString(), (year + 1).toString()];
    }
  }

  const handleFormClose = () => {
    setFormOpen(false);
    setComments('');
    setSelectedDay(null);
  };

  const handleDayClick = (m, d) => {
    const clickedDay = user.years[year][m][d];
    setSelectedDay(clickedDay);
    setComments(clickedDay.comments);
    setFormOpen(true);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSave = (selectedEventObj) => {
    const newUser = cloneDeep(user);
    const newSelectedEvent = { ...selectedEventObj };
    delete newSelectedEvent.id;
    getEventsList(newUser, selectedDay.date).push(newSelectedEvent);
    saveUser(firebase, newUser);
    handleFormClose();
  };

  const handleDelete = (idDelete) => {
    const newUser = cloneDeep(user);
    getEventsList(newUser, selectedDay.date).splice(idDelete, 1);
    saveUser(firebase, newUser);
    handleFormClose();
  };

  const handleMoveTop = (idMove) => {
    const newUser = cloneDeep(user);
    const { date } = selectedDay;
    const eventsList = getEventsList(newUser, date);
    const ev = eventsList.splice(idMove, 1);
    eventsList.unshift(ev[0]);
    newUser.years[date.year][date.month][date.day].events = eventsList;
    saveUser(firebase, newUser);
    handleFormClose();
  };

  const handleCommentSave = () => {
    const newUser = cloneDeep(user);
    const { date } = selectedDay;
    newUser.years[date.year][date.month][date.day].comments = comments;
    saveUser(firebase, newUser);
    handleFormClose();
  };

  return (
    <Content>
      <FormControl style={{ marginBottom: 24 }}>
        <Select
          value={year.toString()}
          onChange={(event) => {
            setYear(parseInt(event.target.value, 10));
          }}
        >
          {yearsSelect.map((y) => (
            <MenuItem key={y} value={y.toString()} component="h1" dense>{y}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedDay ? (
        <DayEventsForm
          open={isFormOpen}
          onClose={() => handleFormClose()}
          onSelect={(eventToSave) => handleSave(eventToSave)}
          onDelete={(idDelete) => handleDelete(idDelete)}
          onMoveTop={(idMove, eventToMove) => handleMoveTop(idMove, eventToMove)}
          day={selectedDay}
          events={events}
          comments={comments}
          onCommentChange={(event) => handleCommentsChange(event)}
          onCommentSave={() => handleCommentSave()}
        />
      ) : null}
      <YearGrid
        months={userYear}
        year={year}
        onClick={(month, day) => handleDayClick(month, day)}
      />
    </Content>
  );
};

UserHomePage.propTypes = {
  firebase: PropTypes.any.isRequired,
  authUser: PropTypes.any.isRequired,
};

UserHomePage.defaultProps = {};

export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(UserHomePage);
