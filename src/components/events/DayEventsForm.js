import {
  Dialog, DialogActions, DialogContent, DialogTitle
} from '@material-ui/core';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CustomButton from '../_common/CustomButton';
import EventFormContent from './EventFormContent';
import MoneyFormContent from './MoneyFormContent';

const eventTypes = {
  CALENDAR: 0,
  MONEY: 1
}

const DayEventsForm = ({
  open, onClose, day, comments, events, onMoneySave,
  onSelect, onDelete, onMoveTop, onCommentChange, onCommentSave,
}) => {
  const [eventType, setEventType] = useState(eventTypes.CALENDAR);
  const date = moment(`${day.date.day}-${day.date.month}-${day.date.year}`, 'D-M-YYYY');

  const renderEventForm = () => {
    if (eventType === eventTypes.CALENDAR) {
      return (
        <EventFormContent
          day={day}
          onMoveTop={onMoveTop}
          onDelete={onDelete}
          events={events}
          onSelect={onSelect}
          comments={comments}
          onCommentChange={onCommentChange}
          onCommentSave={onCommentSave}
          onChangeToMoney={() => setEventType(eventTypes.MONEY)}
        />
      );
    }
    if (eventType === eventTypes.MONEY) {
      return (
        <MoneyFormContent
          onMoneySave={(state) => onMoneySave(state)}
          onChangeToCalendar={() => setEventType(eventTypes.CALENDAR)} />
      )
    }
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {date.format('dddd, MMMM Do YYYY')}
      </DialogTitle>
      <DialogContent>
        {renderEventForm()}
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
  config: PropTypes.any,
  comments: PropTypes.string,
  events: PropTypes.any,
  stores: PropTypes.any,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
  onMoveTop: PropTypes.func,
  onCommentChange: PropTypes.func,
  onCommentSave: PropTypes.func,
  onMoneySave: PropTypes.func,
};

DayEventsForm.defaultProps = {
  open: true,
  onClose: () => { },
  day: null,
  comments: '',
  config: {},
  events: [],
  onSelect: () => { },
  onDelete: () => { },
  onMoveTop: () => { },
  onCommentChange: () => { },
  onCommentSave: () => { },
  onMoneySave: () => { },
};

export default DayEventsForm;
