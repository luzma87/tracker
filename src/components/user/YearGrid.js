/* eslint-disable react/no-array-index-key,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
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
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const YearGrid = ({ months, year, handleClick }) => {
  const [today] = useState(moment());
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
        {Object.entries(days).map(([day, events]) => {
          const isToday = parseInt(month, 10) === today.month() + 1
              && parseInt(day, 10) === today.date();
          const selectedStyle = isToday ? {
            background: 'pink',
            border: 'solid 1px red',
          } : {};
          let eventStyle = {};
          if (events.length > 0) {
            eventStyle = {
              background: events[0].color,
            };
          }
          return (
            <div
              key={`${month}_${day}`}
              style={{ ...dayStyle, ...selectedStyle, ...eventStyle }}
              onClick={() => handleClick(parseInt(month, 10), parseInt(day, 10))}
            >
              {events.length > 0 ? events[0].content : ''}
            </div>
          );
        })}
      </div>
    );
  });
  return (
    <Grid item xs={12} container>
      <div style={monthStyle}>
        <div style={titleStyle}>&nbsp;</div>
        {Array.from({ length: 31 }).map((x, i) => (
          <div key={i + 1} style={dayStyle}>
            {i + 1}
          </div>
        ))}
      </div>
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
