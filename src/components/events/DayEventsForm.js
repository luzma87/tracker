import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,
} from '@material-ui/core';
import CustomButton from '../_common/CustomButton';
import EventsList from './EventsList';

const DayEventsForm = ({
  open, onClose, day, events, onSave, onDelete,
}) => {
  const date = moment(`${day.date.day}-${day.date.month}-${day.date.year}`, 'D-M-YYYY');
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {date.format('dddd, MMMM Do YYYY')}
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item style={{ marginRight: 4, paddingRight: 4, borderRight: 'solid 1px #999' }}>
            <DialogContentText>Events today</DialogContentText>
            <EventsList events={day.events} onDelete={(id) => onDelete(id)} />
          </Grid>
          <Grid item>
            <DialogContentText>Add event</DialogContentText>
            <EventsList events={events} onClick={(event) => onSave(event)} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={onClose} color="primary" label="Cancel" />
      </DialogActions>
    </Dialog>
  );
};

DayEventsForm.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  day: PropTypes.any,
  events: PropTypes.any,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
};

DayEventsForm.defaultProps = {
  open: true,
  onClose: () => {},
  day: null,
  events: [],
  onSave: () => {},
  onDelete: () => {},
};

export default DayEventsForm;
