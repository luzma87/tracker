/* eslint-disable react/no-array-index-key,react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton, List, ListItem, ListItemText,
} from '@material-ui/core';
import CustomIcon from '../_common/CustomIcon';

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

const getEditButton = (id, event, onEdit) => {
  if (!onEdit) return null;
  return (
    <IconButton size="small" color="primary" onClick={() => onEdit(id, event)}>
      <CustomIcon icon="calendar-edit" />
    </IconButton>
  );
};

const EventsList = ({
  events, selectedEvent, onClick, onEdit, onDelete,
}) => {
  const listItemParams = {};
  return (
    <List>
      {events.map((event, i) => {
        let iconSize = 24;
        if (onClick) {
          listItemParams.button = true;
          listItemParams.onClick = () => onClick(event);
          iconSize = 32;
        }
        if (selectedEvent) {
          listItemParams.selected = selectedEvent === event.id || selectedEvent === i;
        }
        return (
          <ListItem key={`${event.name}_${i}`} {...listItemParams}>
            <div style={eventStyle(event, iconSize)}>{event.content}</div>
            <ListItemText primary={event.name} style={{ marginRight: 8 }} />
            {getEditButton(i, event, onEdit)}
            {getDeleteButton(i, event, onDelete)}
          </ListItem>
        );
      })}
    </List>
  );
};

EventsList.propTypes = {
  events: PropTypes.any.isRequired,
  selectedEvent: PropTypes.string,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

EventsList.defaultProps = {
  selectedEvent: null,
  onClick: null,
  onEdit: null,
  onDelete: null,
};

export default EventsList;
