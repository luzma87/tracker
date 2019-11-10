import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const EventForm = ({ open, handleClose, day }) => {
  if (!day) return null;
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {day.format('dddd, MMMM Do YYYY')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
            Algo algo
        </DialogContentText>
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
};

EventForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  day: PropTypes.any,
};

EventForm.defaultProps = {
  open: true,
  handleClose: () => {},
  day: null,
};

export default EventForm;
