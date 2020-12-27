import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgExchangeBw = ({ title, titleId, ...props }) => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.025 512.025"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M480.013 304.093c0 44.8-26.88 48-32 48H54.573l84.64-84.64-22.56-22.72-112 112c-6.204 6.241-6.204 16.319 0 22.56l112 112 22.56-22.56-84.64-84.64h393.44c22.08 0 64-16 64-80v-48h-32v48z" />
      <path d="M32.013 208.093c0-44.8 26.88-48 32-48h393.44l-84.64 84.64 22.56 22.56 112-112c6.204-6.241 6.204-16.319 0-22.56l-112-112-22.72 22.72 84.8 84.64H64.013c-22.08 0-64 16-64 80v48h32v-48z" />
    </svg>
  </SvgIcon>
);

SvgExchangeBw.defaultProps = {
  title: null,
  titleId: null,
};
SvgExchangeBw.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgExchangeBw;
