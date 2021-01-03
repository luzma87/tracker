import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgCategoriesBw = ({ title, titleId, ...props }) => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M128 40a88 88 0 1088 88 88.1 88.1 0 00-88-88zm0 160a72 72 0 1172-72 72.081 72.081 0 01-72 72z" />
      <path d="M144 112a8 8 0 000-16h-8a8 8 0 00-16 0h-8a8 8 0 00-8 8v24a8 8 0 008 8h24v8h-24a8 8 0 000 16h8a8 8 0 0016 0h8a8 8 0 008-8v-24a8 8 0 00-8-8h-24v-8z" />
      <path d="M220 8H36A28.032 28.032 0 008 36v184a28.032 28.032 0 0028 28h184a28.032 28.032 0 0028-28V36a28.032 28.032 0 00-28-28zm12 212a12.013 12.013 0 01-12 12H36a12.013 12.013 0 01-12-12V36a12.013 12.013 0 0112-12h184a12.013 12.013 0 0112 12zM476 8H292a28.032 28.032 0 00-28 28v184a28.032 28.032 0 0028 28h184a28.032 28.032 0 0028-28V36a28.032 28.032 0 00-28-28zm12 212a12.013 12.013 0 01-12 12H292a12.013 12.013 0 01-12-12V36a12.013 12.013 0 0112-12h184a12.013 12.013 0 0112 12zM220 264H36a28.032 28.032 0 00-28 28v184a28.032 28.032 0 0028 28h184a28.032 28.032 0 0028-28V292a28.032 28.032 0 00-28-28zm12 212a12.013 12.013 0 01-12 12H36a12.013 12.013 0 01-12-12V292a12.013 12.013 0 0112-12h184a12.013 12.013 0 0112 12zM476 264H292a28.031 28.031 0 00-28 28v184a28.031 28.031 0 0028 28h184a28.031 28.031 0 0028-28V292a28.031 28.031 0 00-28-28zm12 212a12.01 12.01 0 01-12 12H292a12.01 12.01 0 01-12-12V292a12.01 12.01 0 0112-12h184a12.01 12.01 0 0112 12z" />
      <path d="M439.972 359.335A8 8 0 00432 352h-16v-12a28.032 28.032 0 00-28-28h-8a28.032 28.032 0 00-28 28v12h-16a8 8 0 00-7.972 7.335l-8 96A8 8 0 00328 464h112a8 8 0 007.972-8.665zM368 340a12.013 12.013 0 0112-12h8a12.013 12.013 0 0112 12v12h-32zm-31.306 108l6.667-80H352v8a8 8 0 0016 0v-8h32v8a8 8 0 0016 0v-8h8.639l6.667 80z" />
    </svg>
  </SvgIcon>
);

SvgCategoriesBw.defaultProps = {
  title: null,
  titleId: null,
};
SvgCategoriesBw.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgCategoriesBw;