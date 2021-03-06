/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const getDayBackground = (events) => {
  if (events.length === 0) return {};
  if (events.length === 1) return { background: events[0].color };

  const percentage = 100 / events.length;
  let stepCount = 0;
  let background = ['conic-gradient('];
  const bg = [];
  events.forEach((event) => {
    stepCount += percentage;
    bg.push(`${event.color} 0 ${stepCount}%`);
  });
  background += bg.join(', ');
  background += ')';
  return { background };
};

const YearGridDay = ({
  day, month, isToday, dayNumber, onClick,
}) => {
  const { events } = day;
  return (
    <div
      className={`grid-day ${isToday ? 'grid-today' : ''}`}
      style={getDayBackground(events)}
      onClick={() => onClick(parseInt(month, 10), parseInt(dayNumber, 10))}
    >
      {events.length > 0 ? events[0].content : ''}
    </div>
  );
};

YearGridDay.propTypes = {
  day: PropTypes.any.isRequired,
  month: PropTypes.any.isRequired,
  isToday: PropTypes.any.isRequired,
  dayNumber: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired,
};

YearGridDay.defaultProps = {};

export default YearGridDay;
