import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgLogoutBw = ({ title, titleId, ...props }) => (
  <SvgIcon {...props}>
    <svg
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M9 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9C6.794 2 5 3.794 5 6s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM17.5 22H.5a.5.5 0 01-.5-.5v-4C0 15.019 2.019 13 4.5 13h9c2.481 0 4.5 2.019 4.5 4.5v4a.5.5 0 01-.5.5zM1 21h16v-3.5c0-1.93-1.57-3.5-3.5-3.5h-9C2.57 14 1 15.57 1 17.5zM23.5 11h-8a.5.5 0 010-1h8a.5.5 0 010 1z" />
      <path d="M19.5 15a.5.5 0 01-.354-.853l3.646-3.646-3.646-3.646a.5.5 0 01.707-.707l4 4a.5.5 0 010 .707l-4 4A.501.501 0 0119.5 15z" />
    </svg>
  </SvgIcon>
);

SvgLogoutBw.defaultProps = {
  title: null,
  titleId: null,
};
SvgLogoutBw.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgLogoutBw;
