import {
  Button, Card, CardActions, CardContent
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { SketchPicker } from 'react-color';
import CustomIcon from '../_common/CustomIcon';
import CustomTextField from '../_common/CustomTextField';

const EventForm = ({
  selectedEvent, onDataChange, onCancel, onSave,
}) => {
  const onChangeComplete = (color) => {
    const newEvent = {
      target: {
        name: 'color',
        value: color.hex,
      },
    };
    onDataChange(newEvent);
  };

  return (
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
            <SketchPicker
              color={selectedEvent.color}
              onChangeComplete={onChangeComplete}
              presetColors={[
                '#F78DA7', '#EB144C', '#D0021B',
                '#F8E71C', '#FCB900', '#F5A623', '#FF6900', '#8B572A',
                '#B8E986', '#7ED321', '#417505',
                '#50E3C2', '#7BDCB5', '#00D084',
                '#4A90E2', '#8ED1FC',
                '#BD10E0', '#9013FE', '#9900EF',
                '#ABB8C3', '#9B9B9B', '#4A4A4A',
              ]}
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
};

EventForm.propTypes = {
  selectedEvent: PropTypes.any,
  onDataChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

EventForm.defaultProps = {
  selectedEvent: {},
  onDataChange: () => { },
  onCancel: () => { },
  onSave: () => { },
};

export default EventForm;
