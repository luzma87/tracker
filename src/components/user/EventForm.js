import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomSelect from '../_common/CustomSelect';

const EventForm = ({
  open, handleClose, day, events, selectedEvent, handleEventSelection,
}) => (
  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">
      {day.format('dddd, MMMM Do YYYY')}
    </DialogTitle>
    <DialogContent>
      <CustomSelect
        id="events"
        value={selectedEvent}
        label="Event"
        values={events}
        onChange={handleEventSelection}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
                    Cancel
      </Button>
      <Button onClick={handleClose} color="primary">
                    Save
      </Button>
    </DialogActions>
  </Dialog>
);

EventForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  day: PropTypes.any,
  events: PropTypes.any,
  selectedEvent: PropTypes.string,
  handleEventSelection: PropTypes.func,
};

EventForm.defaultProps = {
  open: true,
  handleClose: () => {},
  day: null,
  events: [],
  selectedEvent: null,
  handleEventSelection: () => {},
};

export default EventForm;
