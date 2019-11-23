import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, CardActions, CardContent,
} from '@material-ui/core';
import { SliderPicker } from 'react-color';
import CustomTextField from '../_common/CustomTextField';
import CustomIcon from '../_common/CustomIcon';

const EventForm = ({
  selectedEvent, onDataChange, onCancel, onSave,
}) => (
  <Card>
    <CardContent>
      <form
        noValidate
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <CustomTextField
          value={selectedEvent.name}
          id="name"
          label="Name"
          onChange={(event) => onDataChange(event)}
        />
        <div style={{ marginBottom: 24 }}>
          <SliderPicker
            color={selectedEvent.color}
            onChangeComplete={(color) => {
              const newEvent = {
                target: {
                  name: 'color',
                  value: color.hex,
                },
              };
              onDataChange(newEvent);
            }}
          />
        </div>
        <CustomTextField
          value={selectedEvent.content}
          id="content"
          label="Content"
          onChange={(event) => onDataChange(event)}
        />
      </form>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" onClick={() => onCancel()}>
          Cancel
      </Button>
      <Button
        size="small"
        color="primary"
        startIcon={<CustomIcon icon="save" />}
        onClick={() => onSave()}
      >
          Save
      </Button>
    </CardActions>
  </Card>
);

EventForm.propTypes = {
  selectedEvent: PropTypes.any,
  onDataChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

EventForm.defaultProps = {
  selectedEvent: {},
  onDataChange: () => {},
  onCancel: () => {},
  onSave: () => {},
};

export default EventForm;