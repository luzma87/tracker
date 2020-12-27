import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgCalendarDeleteBw = ({ title, titleId, ...props }) => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M492 352c11.046 0 20-8.954 20-20V120c0-44.112-35.888-80-80-80h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h352c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v212c0 11.046 8.954 20 20 20z" />
      <path d="M176.858 375.142C180.763 379.047 185.881 381 191 381s10.237-1.953 14.142-5.858L256 324.284l50.858 50.858A19.937 19.937 0 00321 381a19.937 19.937 0 0014.142-5.858c7.811-7.81 7.811-20.473 0-28.284L284.284 296l50.858-50.858c7.811-7.81 7.81-20.473 0-28.284s-20.473-7.811-28.284 0L256 267.716l-50.858-50.858c-7.81-7.811-20.473-7.81-28.284 0s-7.811 20.473 0 28.284L227.716 296l-50.858 50.858c-7.811 7.81-7.811 20.473 0 28.284z" />
    </svg>
  </SvgIcon>
);

SvgCalendarDeleteBw.defaultProps = {
  title: null,
  titleId: null,
};
SvgCalendarDeleteBw.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgCalendarDeleteBw;
