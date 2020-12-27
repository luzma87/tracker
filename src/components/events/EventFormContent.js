import {
  Button,
  DialogContentText, Grid, Paper
} from '@material-ui/core';
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import React, { Fragment } from 'react';
import CustomIcon from '../_common/CustomIcon';
import EventsList from './EventsList';

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

const EventFormContent = ({ day, onMoveTop, onDelete, events, onSelect,
  comments, onCommentChange, onCommentSave, onChangeToMoney }) => {
  return (
    <Fragment>
      <Button
        variant="contained" color="secondary"
        endIcon={<CustomIcon icon="money" />}
        style={{ marginBottom: 8 }}
        onClick={onChangeToMoney}
      />
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
    </Fragment>
  )
}

EventFormContent.propTypes = {
  day: PropTypes.object,
  events: PropTypes.array,
  comments: PropTypes.string,
  onMoveTop: PropTypes.func,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  onCommentChange: PropTypes.func,
  onCommentSave: PropTypes.func,
  onChangeToMoney: PropTypes.func,
}

export default EventFormContent
