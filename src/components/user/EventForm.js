import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import CustomButton from '../_common/CustomButton';

const eventStyle = (event) => ({
  background: event.color,
  width: 32,
  height: 32,
  padding: 4,
  marginRight: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const EventForm = ({
  open, handleClose, day, events, selectedEvent, handleEventSelection, handleSave,
}) => {
  const date = moment(`${day.date.day}-${day.date.month}-${day.date.year}`, 'D-M-YYYY');
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {date.format('dddd, MMMM Do YYYY')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
                    Choose an event for today
        </DialogContentText>
        <List>
          {events.map((event) => (
            <ListItem
              key={event.id}
              button
              selected={selectedEvent && event.id === selectedEvent.id}
              onClick={() => handleEventSelection(event)}
            >
              <div style={eventStyle(event)}>
                {event.content}
              </div>
              <ListItemText primary={event.name} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={handleClose} color="primary" label="Cancel" />
        <CustomButton onClick={handleSave} color="primary" label="Save" />
      </DialogActions>
    </Dialog>
  );
};

EventForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  day: PropTypes.any,
  events: PropTypes.any,
  selectedEvent: PropTypes.shape({}),
  handleEventSelection: PropTypes.func,
  handleSave: PropTypes.func,
};

EventForm.defaultProps = {
  open: true,
  handleClose: () => {},
  day: null,
  events: [],
  selectedEvent: null,
  handleEventSelection: () => {},
  handleSave: () => {},
};

export default EventForm;
