import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgLogoutColor = ({ title, titleId, ...props }) => (
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
      <circle cx={9} cy={6} fill="#607d8b" r={5} />
      <path
        d="M18 17.75v3.5c0 .41-.34.75-.75.75H.75c-.41 0-.75-.34-.75-.75v-3.5C0 15.13 2.13 13 4.75 13h8.5c2.62 0 4.75 2.13 4.75 4.75z"
        fill="#607d8b"
      />
      <path
        d="M23.761 9.45l-3.5-3.25a.75.75 0 00-.511-.199c-.495 0-.75.422-.75.749V9h-4a1 1 0 100 2h4v2.25a.75.75 0 001.261.55l3.5-3.25a.754.754 0 000-1.1z"
        fill="#42a5f5"
      />
      <path
        d="M24 10H14a1 1 0 001 1h4v2.25a.75.75 0 001.261.55l3.5-3.25A.753.753 0 0024 10z"
        fill="#2196f3"
      />
      <g fill="#546d79">
        <path d="M9 13H4.75A4.756 4.756 0 000 17.75v3.5c0 .414.336.75.75.75H9zM9 1C6.243 1 4 3.243 4 6s2.243 5 5 5z" />
      </g>
    </svg>
  </SvgIcon>
);

SvgLogoutColor.defaultProps = {
  title: null,
  titleId: null,
};
SvgLogoutColor.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgLogoutColor;
