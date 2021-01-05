import {
  Button, Card, CardActions, CardContent
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import CustomIcon from '../_common/CustomIcon';
import CustomTextField from '../_common/CustomTextField';

const StoreForm = ({
  selectedStore, onDataChange, onCancel, onSave,
}) => (
  <Card>
    <CardContent>
      <form
        noValidate
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <CustomTextField
          value={selectedStore.name}
          id="name"
          label="Name"
          onChange={(event) => onDataChange(event)}
        />
        <CustomTextField
          value={selectedStore.legalName || ''}
          id="legalName"
          label="Legal Name"
          onChange={(event) => onDataChange(event)}
        />
        <CustomTextField
          value={selectedStore.ruc}
          id="ruc"
          label="RUC"
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

StoreForm.propTypes = {
  selectedStore: PropTypes.any,
  onDataChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

StoreForm.defaultProps = {
  selectedStore: {},
  onDataChange: () => { },
  onCancel: () => { },
  onSave: () => { },
};

export default StoreForm;
