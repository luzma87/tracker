import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Button, Grid, Paper } from '@material-ui/core';
import Content from '../_common/Content';
import withAuthorization from '../session/withAuthorization';
import conditions from '../../constants/conditions';
import withFirebase from '../firebase/withFirebase';
import eventsHooks from '../../hooks/eventsHooks';
import EventsList from './EventsList';
import EventForm from './EventForm';
import CustomIcon from '../_common/CustomIcon';

const initialState = {
  name: '',
  color: '',
  content: '',
};

const createEvent = (firebase, event) => {
  const newEvent = { ...event };
  const newEventRef = firebase.events().doc();
  newEvent.id = newEventRef.id;
  return newEventRef.set(newEvent);
};

const updateEvent = (firebase, event) => firebase.event(event.id).set(event);

const saveEvent = (firebase, newEvent) => {
  let promise;
  if (newEvent.id) {
    promise = updateEvent(firebase, newEvent);
  } else {
    promise = createEvent(firebase, newEvent);
  }
  promise
    .then(() => {
      console.log('doc written with id');
    })
    .catch((error) => {
      console.log('error adding doc: ', error);
    });
};

const EventsPage = ({ firebase }) => {
  const { events } = eventsHooks.useEvents(firebase);
  const [selectedEvent, setSelectedEvent] = useState(initialState);
  const [isFormOpen, setFormOpen] = useState(false);

  const onDataChange = (event) => {
    setSelectedEvent({ ...selectedEvent, [event.target.name]: event.target.value });
  };

  const handleDelete = (id, event) => {
    firebase.event(event.id)
      .delete()
      .then(() => console.log('delete successful'))
      .catch((error) => console.log('error deleting: ', error));
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
    saveEvent(firebase, selectedEvent);
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
};

EventsPage.defaultProps = {};

export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(EventsPage);
