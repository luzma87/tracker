import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgCalendarStarBw = ({ title, titleId, ...props }) => (
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
      <path d="M364.316 268.282C359.807 254.356 347.051 245 332.572 245H298.13l-10.371-31.985C283.266 199.249 270.503 190 256 190a33.33 33.33 0 00-31.771 23.051L213.87 245h-34.442c-14.479 0-27.236 9.356-31.746 23.283-4.535 14.008.345 29.154 12.145 37.69l27.632 19.988-10.543 32.307c-4.488 13.752.357 28.722 12.056 37.252a33.362 33.362 0 0039.305.074L256 375.535l27.724 20.062a33.391 33.391 0 0019.599 6.364 33.395 33.395 0 0019.704-6.44c11.699-8.53 16.544-23.501 12.056-37.253l-10.543-32.307 27.632-19.988c11.8-8.536 16.68-23.682 12.144-37.691zm-67.156 28.117c-11.78 8.52-16.666 23.521-12.161 37.329l5.732 17.565-15.132-10.95C269.861 336.193 263.084 334 256 334s-13.861 2.193-19.601 6.345l-15.129 10.947 5.732-17.565c4.505-13.807-.382-28.808-12.16-37.327L199.083 285h19.367c14.855 0 27.321-8.787 31.77-22.422l5.78-17.825 5.791 17.863C266.23 276.213 278.696 285 293.55 285h19.367l-15.757 11.399z" />
    </svg>
  </SvgIcon>
);

SvgCalendarStarBw.defaultProps = {
  title: null,
  titleId: null,
};
SvgCalendarStarBw.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgCalendarStarBw;