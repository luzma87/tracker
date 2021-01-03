import { Button, Grid, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { compose } from 'recompose';
import conditions from '../../constants/conditions';
import eventsHooks from '../../hooks/eventsHooks';
import withFirebase from '../firebase/withFirebase';
import withAuthorization from '../session/withAuthorization';
import Content from '../_common/Content';
import CustomIcon from '../_common/CustomIcon';
import EventForm from './EventForm';
import EventsList from './EventsList';

const initialState = {
  name: '',
  color: '',
  content: '',
};

const createEvent = (firebase, userUid, event) => {
  const newEvent = { ...event };
  const newEventRef = firebase.userEvents(userUid).doc();
  newEvent.id = newEventRef.id;
  return newEventRef.set(newEvent);
};

const updateEvent = (firebase, userUid, event) => firebase.userEvent(userUid, event.id).set(event);

const saveEvent = (firebase, userUid, newEvent) => {
  let promise;
  if (newEvent.id) {
    promise = updateEvent(firebase, userUid, newEvent);
  } else {
    promise = createEvent(firebase, userUid, newEvent);
  }
  promise
    .then(() => {
      console.log('doc written with id');
    })
    .catch((error) => {
      console.log('error adding doc: ', error);
    });
};

const deleteEvent = (firebase, userUid, event) => {
  firebase.userEvent(userUid, event.id)
    .delete()
    .then(() => console.log('delete successful'))
    .catch((error) => console.log('error deleting: ', error));
};

const EventsPage = ({ firebase, authUser }) => {
  const userUid = authUser.uid;
  const { events } = eventsHooks.useUserEvents(firebase, userUid);
  const [selectedEvent, setSelectedEvent] = useState(initialState);
  const [isFormOpen, setFormOpen] = useState(false);

  const onDataChange = (event) => {
    setSelectedEvent({ ...selectedEvent, [event.target.name]: event.target.value });
  };

  const handleDelete = (id, event) => {
    deleteEvent(firebase, userUid, event);
  };

  const resetState = () => {
    setSelectedEvent(initialState);
  };

  const handleCreate = () => {
    resetState();
    setFormOpen(true);
  };

  const handleEdit = (id, event) => {
    setFormOpen(true);
    setSelectedEvent(event);
  };

  const handleCancel = () => {
    resetState();
    setFormOpen(false);
  };

  const handleSave = () => {
    saveEvent(firebase, userUid, selectedEvent);
    handleCancel();
  };

  const getForm = () => {
    if (!isFormOpen) return null;
    return (
      <Grid item>
        <EventForm
          onSave={() => handleSave()}
          onCancel={() => handleCancel()}
          onDataChange={(event) => onDataChange(event)}
          selectedEvent={selectedEvent}
        />
      </Grid>
    );
  };

  return (
    <Content>
      <Typography variant="h5" color="primary">
        Events
      </Typography>
      <Grid container>
        <Grid item style={{ marginRight: 24 }}>
          <Paper>
            <Button
              startIcon={<CustomIcon icon="calendar-plus" />}
              color="primary"
              variant="outlined"
              style={{ width: '100%' }}
              onClick={() => handleCreate()}
            >
              New
            </Button>
            <EventsList
              events={events}
              selectedEvent={selectedEvent.id}
              onEdit={(id, event) => handleEdit(id, event)}
              onDelete={(id, event) => handleDelete(id, event)}
            />
          </Paper>
        </Grid>
        {getForm()}
      </Grid>
    </Content>
  );
};

EventsPage.propTypes = {
  firebase: PropTypes.any.isRequired,
  authUser: PropTypes.any.isRequired,
};

EventsPage.defaultProps = {};

export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(EventsPage);
