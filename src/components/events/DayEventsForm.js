import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import CustomButton from '../_common/CustomButton';
import EventsList from './EventsList';
import CustomIcon from '../_common/CustomIcon';

const classes = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
};

const DayEventsForm = ({
  open, onClose, day, comments, events,
  onSelect, onDelete, onMoveTop, onCommentChange, onCommentSave,
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
            <EventsList
              events={day.events}
              editIcon="calendar-star"
              onEdit={(id, event) => onMoveTop(id, event)}
              onDelete={(id) => onDelete(id)}
            />
          </Grid>
          <Grid item>
            <DialogContentText>Add event</DialogContentText>
            <EventsList
              events={events}
              onClick={(event) => onSelect(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <Paper component="form" style={classes.root}>
              <InputBase
                style={classes.input}
                placeholder="Comments"
                value={comments}
                inputProps={{ 'aria-label': 'search google maps' }}
                fullWidth
                onChange={(event) => onCommentChange(event)}
              />
              <IconButton color="primary" onClick={() => onCommentSave()} style={classes.iconButton}>
                <CustomIcon icon="save" />
              </IconButton>
            </Paper>
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
  comments: PropTypes.string,
  events: PropTypes.any,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
  onMoveTop: PropTypes.func,
  onCommentChange: PropTypes.func,
  onCommentSave: PropTypes.func,
};

DayEventsForm.defaultProps = {
  open: true,
  onClose: () => {},
  day: null,
  comments: '',
  events: [],
  onSelect: () => {},
  onDelete: () => {},
  onMoveTop: () => {},
  onCommentChange: () => {},
  onCommentSave: () => {},
};

export default DayEventsForm;
