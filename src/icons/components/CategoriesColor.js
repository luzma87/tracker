import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgCategoriesColor = ({ title, titleId, ...props }) => (
  <SvgIcon {...props}>
    <svg
      height="1em"
      viewBox="0 0 512 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect fill="#ff9811" height={224} rx={20} width={224} x={16} y={16} />
      <circle cx={128} cy={128} fill="#ffda44" r={80} />
      <rect fill="#ab2300" height={224} rx={20} width={224} x={272} y={16} />
      <rect fill="#83d8f4" height={224} rx={20} width={224} x={16} y={272} />
      <rect fill="#ffda44" height={224} rx={20} width={224} x={272} y={272} />
      <path d="M440 456H328l8-96h96z" fill="#ab2300" />
      <g>
        <path d="M128 40a88 88 0 1088 88 88.1 88.1 0 00-88-88zm0 160a72 72 0 1172-72 72.081 72.081 0 01-72 72z" />
        <path d="M144 112a8 8 0 000-16h-8a8 8 0 00-16 0h-8a8 8 0 00-8 8v24a8 8 0 008 8h24v8h-24a8 8 0 000 16h8a8 8 0 0016 0h8a8 8 0 008-8v-24a8 8 0 00-8-8h-24v-8z" />
        <path d="M220 8H36A28.032 28.032 0 008 36v184a28.032 28.032 0 0028 28h184a28.032 28.032 0 0028-28V36a28.032 28.032 0 00-28-28zm12 212a12.013 12.013 0 01-12 12H36a12.013 12.013 0 01-12-12V36a12.013 12.013 0 0112-12h184a12.013 12.013 0 0112 12zM476 8H292a28.032 28.032 0 00-28 28v184a28.032 28.032 0 0028 28h184a28.032 28.032 0 0028-28V36a28.032 28.032 0 00-28-28zm12 212a12.013 12.013 0 01-12 12H292a12.013 12.013 0 01-12-12V36a12.013 12.013 0 0112-12h184a12.013 12.013 0 0112 12zM220 264H36a28.032 28.032 0 00-28 28v184a28.032 28.032 0 0028 28h184a28.032 28.032 0 0028-28V292a28.032 28.032 0 00-28-28zm12 212a12.013 12.013 0 01-12 12H36a12.013 12.013 0 01-12-12V292a12.013 12.013 0 0112-12h184a12.013 12.013 0 0112 12zM476 264H292a28.031 28.031 0 00-28 28v184a28.031 28.031 0 0028 28h184a28.031 28.031 0 0028-28V292a28.031 28.031 0 00-28-28zm12 212a12.01 12.01 0 01-12 12H292a12.01 12.01 0 01-12-12V292a12.01 12.01 0 0112-12h184a12.01 12.01 0 0112 12z" />
        <path d="M439.972 359.335A8 8 0 00432 352h-16v-12a28.032 28.032 0 00-28-28h-8a28.032 28.032 0 00-28 28v12h-16a8 8 0 00-7.972 7.335l-8 96A8 8 0 00328 464h112a8 8 0 007.972-8.665zM368 340a12.013 12.013 0 0112-12h8a12.013 12.013 0 0112 12v12h-32zm-31.306 108l6.667-80H352v8a8 8 0 0016 0v-8h32v8a8 8 0 0016 0v-8h8.639l6.667 80z" />
      </g>
    </svg>
  </SvgIcon>
);

SvgCategoriesColor.defaultProps = {
  title: null,
  titleId: null,
};
SvgCategoriesColor.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgCategoriesColor;
