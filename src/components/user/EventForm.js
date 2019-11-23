/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import CustomButton from '../_common/CustomButton';
import CustomIcon from '../_common/CustomIcon';

const eventStyle = (event, size = 32) => ({
  background: event.color,
  width: size,
  height: size,
  padding: 4,
  marginRight: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const EventForm = ({
  open, handleClose, day, events, handleSave, handleDelete,
}) => {
  const date = moment(`${day.date.day}-${day.date.month}-${day.date.year}`, 'D-M-YYYY');
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {date.format('dddd, MMMM Do YYYY')}
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item style={{ marginRight: 4, paddingRight: 4, borderRight: 'solid 1px #999' }}>
            <DialogContentText>Events today</DialogContentText>
            <List>
              {day.events.map((event, i) => (
                <ListItem key={`${event.name}_${i}`}>
                  <div style={eventStyle(event, 24)}>
                    {event.content}
                  </div>
                  <ListItemText primary={event.name} />
                  <ListItemSecondaryAction onClick={() => handleDelete(i)}>
                    <IconButton size="small" color="primary">
                      <CustomIcon icon="trash-alt" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <DialogContentText>Add event</DialogContentText>
            <List>
              {events.map((event) => (
                <ListItem
                  key={event.id}
                  button
                  onClick={() => handleSave(event)}
                >
                  <div style={eventStyle(event)}>
                    {event.content}
                  </div>
                  <ListItemText primary={event.name} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={handleClose} color="primary" label="Cancel" />
      </DialogActions>
    </Dialog>
  );
};

EventForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  day: PropTypes.any,
  events: PropTypes.any,
  handleSave: PropTypes.func,
  handleDelete: PropTypes.func,
};

EventForm.defaultProps = {
  open: true,
  handleClose: () => {},
  day: null,
  events: [],
  handleSave: () => {},
  handleDelete: () => {},
};

export default EventForm;
