import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgUserColor = ({ title, titleId, ...props }) => (
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
      <path
        d="M256 511.996C114.516 511.996 0 397.34 0 256 0 114.512 114.496 0 256 0c141.488 0 255.996 114.496 255.996 256 0 141.477-114.668 255.996-255.996 255.996zm0 0"
        fill="#66a9df"
      />
      <path
        d="M256 0v511.996c141.328 0 255.996-114.52 255.996-255.996C511.996 114.5 397.488 0 256 0zm0 0"
        fill="#4f84cf"
      />
      <path
        d="M256 316c-74.488 0-145.512 32.563-197.418 102.969 103.363 124.941 294.688 123.875 396.656-2.23C430.058 391.69 373.344 316 256 316zm0 0"
        fill="#d6f3fe"
      />
      <path
        d="M455.238 416.738c-48.14 59.528-120.37 95.258-199.238 95.258V316c117.348 0 174.059 75.7 199.238 100.738zm0 0"
        fill="#bdecfc"
      />
      <path
        d="M256 271c-49.629 0-90-40.375-90-90v-30c0-49.625 40.371-90 90-90 49.625 0 90 40.375 90 90v30c0 49.625-40.375 90-90 90zm0 0"
        fill="#d6f3fe"
      />
      <path
        d="M256 61v210c49.629 0 90-40.371 90-90v-30c0-49.629-40.371-90-90-90zm0 0"
        fill="#bdecfc"
      />
    </svg>
  </SvgIcon>
);

SvgUserColor.defaultProps = {
  title: null,
  titleId: null,
};
SvgUserColor.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgUserColor;
