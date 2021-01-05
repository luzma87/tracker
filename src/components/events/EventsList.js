/* eslint-disable react/no-array-index-key,react/jsx-props-no-spreading */
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton, List, ListItem, ListItemText, Popover, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CustomIcon from '../_common/CustomIcon';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const eventStyle = (event, size) => ({
  background: event.color,
  width: size,
  height: size,
  padding: 4,
  marginRight: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const getDeleteButton = (id, event, onDelete) => {
  if (!onDelete) return null;
  return (
    <IconButton size="small" color="primary" onClick={() => onDelete(id, event)}>
      <CustomIcon icon="calendar-times" />
    </IconButton>
  );
};

const getEditButton = (id, event, onEdit, editIcon) => {
  if (!onEdit) return null;
  return (
    <IconButton size="small" color="primary" onClick={() => onEdit(id, event)}>
      <CustomIcon icon={editIcon} />
    </IconButton>
  );
};

const EventsList = ({
  events, selectedEvent, onClick, onEdit, onDelete, editIcon,
}) => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const handlePopoverOpen = (ev, event) => {
    if (event.money) {
      setAnchorEl(ev.currentTarget);
      setHoveredEvent(event);
    }
  };

  const handlePopoverClose = (event) => {
    if (event.money) {
      setAnchorEl(null);
      setHoveredEvent(null);
    }
  };

  const open = Boolean(anchorEl);

  const listItemParams = {};
  return (
    <Fragment>
      <List>
        {events.map((event, i) => {
          let iconSize = 24;
          if (onClick) {
            listItemParams.button = true;
            listItemParams.onClick = () => onClick(event);
            iconSize = 16;
          }
          if (selectedEvent) {
            listItemParams.selected = selectedEvent === event.id || selectedEvent === i;
          }
          return (
            <ListItem dense key={`${event.name}_${i}`} {...listItemParams}>
              <div style={eventStyle(event, iconSize)}>{event.content}</div>
              <ListItemText
                primary={event.name}
                style={{ marginRight: 8 }}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(ev) => handlePopoverOpen(ev, event)}
                onMouseLeave={() => handlePopoverClose(event)}
              />
              {getEditButton(i, event, onEdit, editIcon)}
              {getDeleteButton(i, event, onDelete)}
            </ListItem>
          );
        })}
      </List>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{hoveredEvent?.money?.store?.name}</Typography>
        <div>{hoveredEvent?.money?.categories
          ?.filter(c => c.value && c.value !== 0)
          ?.map(c => (
            <div key={c.name}>{`${c.name} $${c.value}`}</div>
          ))}</div>
      </Popover>
    </Fragment>
  );
};

EventsList.propTypes = {
  events: PropTypes.any.isRequired,
  selectedEvent: PropTypes.string,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  editIcon: PropTypes.string,
};

EventsList.defaultProps = {
  selectedEvent: null,
  onClick: null,
  onEdit: null,
  onDelete: null,
  editIcon: 'calendar-edit',
};

export default EventsList;
