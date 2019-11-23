/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import YearGridDay from './YearGridDay';

const YearGrid = ({ months, year, onClick }) => {
  const [today] = useState(moment());
  if (!months) return null;
  const yearElement = Object.entries(months).map(([month, days]) => {
    const monthName = moment(`${year}-${month}`, 'YYYY-M');
    return (
      <div key={month} className="grid-month">
        <div className="grid-title">
          {monthName.format('MMM')}
        </div>
        {Object.entries(days).map(([dayNumber, day]) => {
          const isToday = parseInt(month, 10) === today.month() + 1
              && parseInt(dayNumber, 10) === today.date();
          return (
            <YearGridDay
              key={`${month}_${dayNumber}`}
              day={day}
              dayNumber={dayNumber}
              onClick={onClick}
              isToday={isToday}
              month={month}
            />
          );
        })}
      </div>
    );
  });
  return (
    <Grid item xs={12} container>
      <div className="grid-month">
        <div className="grid-title">&nbsp;</div>
        {Array.from({ length: 31 }).map((x, i) => (
          <div key={i + 1} className="grid-title grid-day">
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
  onClick: PropTypes.func,
};

YearGrid.defaultProps = {
  months: null,
  year: 0,
  onClick: () => {},
};

export default YearGrid;
