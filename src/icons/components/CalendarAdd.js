import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgCalendarAdd = ({ title, titleId, ...props }) => (
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
      <path d="M255 391c11.046 0 20-8.954 20-20v-55h55c11.046 0 20-8.954 20-20s-8.954-20-20-20h-55v-55c0-11.046-8.954-20-20-20s-20 8.954-20 20v55h-55c-11.046 0-20 8.954-20 20s8.954 20 20 20h55v55c0 11.046 8.954 20 20 20z" />
    </svg>
  </SvgIcon>
);

SvgCalendarAdd.defaultProps = {
  title: null,
  titleId: null,
};
SvgCalendarAdd.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgCalendarAdd;
