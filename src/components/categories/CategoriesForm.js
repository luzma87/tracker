import {
  Button, Card, CardActions, CardContent, Switch, FormControlLabel
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import CustomIcon from '../_common/CustomIcon';
import CustomTextField from '../_common/CustomTextField';

const CategoriesForm = ({
  selectedCategory, onDataChange, onCancel, onSave,
}) => (
  <Card>
    <CardContent>
      <form
        noValidate
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <CustomTextField
          value={selectedCategory.name}
          id="name"
          label="Name"
          onChange={(event) => onDataChange(event)}
        />
        <CustomTextField
          value={selectedCategory.max}
          id="max"
          label="Max"
          type="number"
          onChange={(event) => onDataChange(event)}
        />
        <CustomTextField
          value={selectedCategory.year}
          id="year"
          label="Year"
          type="number"
          onChange={(event) => onDataChange(event)}
        />
        <CustomTextField
          value={selectedCategory.description}
          id="description"
          label="Description"
          onChange={(event) => onDataChange(event)}
        />
        <FormControlLabel
          control={
            <Switch
              checked={selectedCategory.deductible}
              onChange={(event) => onDataChange(event)}
              name="deductible"
              color="primary"
              value="hi"
            />
          }
          label="Deductible"
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

CategoriesForm.propTypes = {
  selectedStore: PropTypes.any,
  onDataChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

CategoriesForm.defaultProps = {
  selectedStore: {},
  onDataChange: () => { },
  onCancel: () => { },
  onSave: () => { },
};

export default CategoriesForm;
