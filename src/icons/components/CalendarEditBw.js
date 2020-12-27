import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgCalendarEditBw = ({ title, titleId, ...props }) => (
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
      <circle cx={299} cy={297} r={20} />
      <path d="M409.589 289.557l-109.803 109.56a20.009 20.009 0 00-5.01 8.346l-23.913 78.725a19.999 19.999 0 0024.476 25.086l80.725-22.362a20.003 20.003 0 008.79-5.119l109.573-109.366c23.394-23.395 23.394-61.459 0-84.854-23.393-23.392-61.458-23.392-84.838-.016zM360.32 451.768l-40.612 11.25 11.885-39.128 74.089-73.925 28.289 28.289-73.651 73.514zm105.838-105.639l-3.875 3.867-28.285-28.285 3.862-3.853c7.798-7.799 20.486-7.799 28.284 0 7.796 7.798 7.796 20.486.014 28.271z" />
      <circle cx={212} cy={384} r={20} />
      <circle cx={212} cy={297} r={20} />
      <circle cx={212} cy={210} r={20} />
      <circle cx={125} cy={297} r={20} />
      <circle cx={125} cy={384} r={20} />
      <circle cx={125} cy={210} r={20} />
      <circle cx={386} cy={210} r={20} />
      <path d="M432 40h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h122c11.046 0 20-8.954 20-20s-8.954-20-20-20H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v90c0 11.046 8.954 20 20 20s20-8.954 20-20v-90c0-44.112-35.886-80-80-80z" />
      <circle cx={299} cy={210} r={20} />
    </svg>
  </SvgIcon>
);

SvgCalendarEditBw.defaultProps = {
  title: null,
  titleId: null,
};
SvgCalendarEditBw.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgCalendarEditBw;
