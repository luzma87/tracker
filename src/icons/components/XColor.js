import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgXColor = ({ title, titleId, ...props }) => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 382.293 382.293"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M368.64 191.148c0 98.024-79.468 177.493-177.492 177.493-98.027 0-177.496-79.47-177.496-177.493 0-98.027 79.47-177.496 177.496-177.496 98.024 0 177.493 79.47 177.493 177.496zm0 0"
        fill="#e86436"
        data-original="#e86436"
      />
      <g xmlns="http://www.w3.org/2000/svg" fill="#5c128d">
        <path
          d="M191.148 382.293C85.746 382.293 0 296.547 0 191.148 0 85.746 85.746 0 191.148 0c105.399 0 191.145 85.746 191.145 191.148 0 105.399-85.746 191.145-191.145 191.145zm0-354.984c-90.343 0-163.84 73.496-163.84 163.84 0 90.34 73.497 163.84 163.84 163.84 90.34 0 163.84-73.5 163.84-163.84 0-90.344-73.5-163.84-163.84-163.84zm0 0"
          fill="#5e1212"
          data-original="#5c128d"
        />
        <path
          d="M259.414 273.066a13.592 13.592 0 01-9.652-4L113.227 132.531c-5.332-5.332-5.332-13.972 0-19.304 5.332-5.332 13.976-5.332 19.304 0l136.535 136.535c5.332 5.332 5.332 13.972 0 19.304-2.664 2.668-6.16 4-9.652 4zm0 0"
          fill="#5e1212"
          data-original="#5c128d"
        />
        <path
          d="M122.879 273.066a13.606 13.606 0 01-9.652-4c-5.332-5.332-5.332-13.972 0-19.304l136.535-136.535c5.332-5.332 13.972-5.332 19.304 0 5.332 5.332 5.332 13.976 0 19.304L132.531 269.066a13.592 13.592 0 01-9.652 4zm0 0"
          fill="#5e1212"
          data-original="#5c128d"
        />
      </g>
    </svg>
  </SvgIcon>
);

SvgXColor.defaultProps = {
  title: null,
  titleId: null,
};
SvgXColor.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgXColor;
