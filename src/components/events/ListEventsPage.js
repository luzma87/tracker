import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import moment from 'moment';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withAuthorization from '../session/withAuthorization';
import conditions from '../../constants/conditions';
import withFirebase from '../firebase/withFirebase';
import usersHooks from '../../hooks/usersHooks';
import Content from '../_common/Content';

const a = (user, year, selectedEvent) => {
  let yearsSelect = [];
  const evs = {};
  const evsSelect = {};

  const months = user.years[year];
  if (user.years && months) {
    yearsSelect = Object.keys(user.years);
    const newYear = parseInt(yearsSelect[0], 10) + yearsSelect.length;
    yearsSelect.push(newYear.toString());

    Object.values(months).forEach((month) => {
      Object.values(month).forEach((day) => {
        if (day.events.length > 0 || (day.comments && day.comments.length() > 0)) {
          const { date, events, comments } = day;
          const { month: thisMonth, day: thisDay } = date;
          const selectedEvs = [];
          events.forEach((ev) => {
            evsSelect[`${ev.name}_${ev.content}`] = ev;
            if (selectedEvent === -1 || ev.content === selectedEvent) {
              selectedEvs.push(ev);
            }
          });
          if (selectedEvs.length > 0) {
            if (!evs[thisMonth]) {
              evs[thisMonth] = {};
            }
            if (!evs[thisMonth][thisDay]) {
              evs[thisMonth][thisDay] = {};
            }
            if (!evs[thisMonth][thisDay].events) {
              evs[thisMonth][thisDay].events = [];
            }
            evs[thisMonth][thisDay].events = [...evs[thisMonth][thisDay].events, ...selectedEvs];
            evs[thisMonth][thisDay].comments = comments;
          }
        }
      });
    });
  }
  return { yearsSelect, evs, evsSelect };
};

const ListEventsPage = ({ firebase, authUser }) => {
  const id = authUser.uid;
  const { isLoading, user } = usersHooks.useUser(firebase, id);
  const [year, setYear] = useState(moment().year());
  const [selectedEvent, setSelectedEvent] = useState(-1);

  let yearsSelect = [];
  let evs = {};
  let evsSelect = {};

  if (user && !isLoading) {
    const r = a(user, year, selectedEvent);
    yearsSelect = r.yearsSelect;
    evs = r.evs;
    evsSelect = r.evsSelect;
  }

  return (
    <Content>
      <FormControl style={{ marginBottom: 24 }}>
        <Select
          value={year.toString()}
          onChange={(event) => {
            setYear(parseInt(event.target.value, 10));
          }}
        >
          {yearsSelect.map((y) => (
            <MenuItem key={y} value={y.toString()}>{y}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ marginBottom: 24, marginLeft: 24 }}>
        <Select
          value={selectedEvent}
          onChange={(event) => {
            setSelectedEvent(event.target.value);
          }}
        >
          <MenuItem value={-1}>All</MenuItem>
          {Object.values(evsSelect).map((e) => (
            <MenuItem key={`${e.content}_sel`} value={e.content}>{e.content}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        {Object.entries(evs).map(([month, days]) => (
          <Grid
            key={month}
            item
            container
            spacing={2}
            style={{
              border: 'solid 1px black',
              margin: 8,
              borderRadius: 8,
            }}
          >
            <Grid item xs={12}>
              {moment.months(month - 1)}
            </Grid>
            {Object.entries(days).map(([day, dayContent]) => (
              <Grid
                key={`${month}_${day}`}
                item
                xs
                container
                spacing={2}
                style={{
                  border: 'solid 1px black',
                  margin: 4,
                  borderRadius: 8,
                }}
              >
                <Grid item xs={12}>
                  {day}
                  {dayContent.comments && dayContent.comments.length > 0 ? (
                    <p>
                      {dayContent.comments}
                    </p>
                  ) : <p>&nbsp;</p>}
                </Grid>
                {dayContent.events.map((event, i) => {
                  return (
                    <Grid
                      key={`${month}_${day}_${event.content}_${i}`}
                      item
                      style={{
                        border: 'solid 1px black',
                        borderRadius: 8,
                        margin: 2,
                        background: event.color,
                      }}
                    >
                      {event.content}
                    </Grid>
                  )
                })}
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Content>
  );
};

ListEventsPage.propTypes = {
  firebase: PropTypes.any.isRequired,
  authUser: PropTypes.any.isRequired,
};

ListEventsPage.defaultProps = {};

export default compose(
  withAuthorization(conditions.isLoggedUser),
  withFirebase,
)(ListEventsPage);
