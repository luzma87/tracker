import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgCalendarBw = ({ title, titleId, ...props }) => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.001 512.001"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <circle cx={299} cy={210} r={20} />
      <circle cx={299} cy={297} r={20} />
      <circle cx={386} cy={210} r={20} />
      <path d="M492 250c11.046 0 20-8.954 20-20V120c0-44.112-35.888-80-80-80h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h252c.681 0 1.354-.035 2.017-.102.659.065 1.319.102 1.978.102a19.998 19.998 0 0014.411-6.127l156-162A20 20 0 00492 310h-96c-44.112 0-80 35.888-80 80v82H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v110c0 11.046 8.954 20 20 20zM356 390c0-22.056 17.944-40 40-40h48.975L356 442.398V390z" />
      <circle cx={125} cy={210} r={20} />
      <circle cx={212} cy={297} r={20} />
      <circle cx={125} cy={384} r={20} />
      <circle cx={125} cy={297} r={20} />
      <circle cx={212} cy={384} r={20} />
      <circle cx={212} cy={210} r={20} />
    </svg>
  </SvgIcon>
);

SvgCalendarBw.defaultProps = {
  title: null,
  titleId: null,
};
SvgCalendarBw.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgCalendarBw;
