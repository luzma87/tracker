import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Typography } from '@material-ui/core';

const size = 32;
const borderColor = '#999';

const monthStyle = {
  width: size,
};
const titleStyle = {
  border: `solid 1px ${borderColor}`,
};
const dayStyle = {
  border: `solid 1px ${borderColor}`,
  height: size,
  fontSize: 10,
};

const YearGrid = ({ months, year, handleClick }) => {
  if (!months) return null;
  const yearElement = Object.entries(months).map(([month, days]) => {
    const monthName = moment(`${year}-${month}`, 'YYYY-M');
    return (
      <div key={month} style={monthStyle}>
        <div style={titleStyle}>
          <Typography variant="subtitle2" align="center">
            {monthName.format('MMM')}
          </Typography>
        </div>
        {Object.entries(days).map(([day, events]) => (
          <div
            key={`${month}_${day}`}
            style={dayStyle}
            onClick={() => handleClick(parseInt(month, 10), parseInt(day, 10))}
          >
            {day}
          </div>
        ))}
      </div>
    );
  });
  return (
    <Grid item xs={12} container>
      {yearElement}
    </Grid>
  );
};

YearGrid.propTypes = {
  months: PropTypes.any,
  year: PropTypes.number,
  handleClick: PropTypes.func,
};

YearGrid.defaultProps = {
  months: null,
  year: 0,
  handleClick: () => {},
};

export default YearGrid;
