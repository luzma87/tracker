import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgSaveColor = ({ title, titleId, ...props }) => (
  <SvgIcon {...props}>
    <svg
      height="1em"
      viewBox="0 0 64 64"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g data-name="Froppy disk">
        <path
          d="M49 3H7a4 4 0 00-4 4v50a4 4 0 004 4h50a4 4 0 004-4V11l-8-8z"
          fill="#d1e7f8"
        />
        <path
          d="M49 3v17a2.006 2.006 0 01-2 2H17a2.006 2.006 0 01-2-2V3z"
          fill="#d1d3d4"
        />
        <path d="M39 7h6v11h-6z" fill="#6d6e71" />
        <path
          d="M51 31H13a4 4 0 00-4 4v26h46V35a4 4 0 00-4-4z"
          fill="#2488ff"
        />
        <path
          d="M3 56v1a4 4 0 004 4h2v-5zM55 5v56h2a4 4 0 004-4V11z"
          fill="#bddbff"
        />
        <path d="M47 56H9v5h46V48a8 8 0 01-8 8z" fill="#006df0" />
        <g fill="#231f20">
          <path d="M61.707 10.293l-8-8A1 1 0 0053 2H7a5.006 5.006 0 00-5 5v50a5.006 5.006 0 005 5h50a5.006 5.006 0 005-5V11a1 1 0 00-.293-.707zM48 4v16a1 1 0 01-1 1H17a1 1 0 01-1-1V4zM10 60V35a3 3 0 013-3h38a3 3 0 013 3v25zm50-3a3 3 0 01-3 3h-1V35a5.006 5.006 0 00-5-5H13a5.006 5.006 0 00-5 5v25H7a3 3 0 01-3-3V7a3 3 0 013-3h7v16a3 3 0 003 3h30a3 3 0 003-3V4h2.586L60 11.414z" />
          <path d="M39 19h6a1 1 0 001-1V7a1 1 0 00-1-1h-6a1 1 0 00-1 1v11a1 1 0 001 1zm1-11h4v9h-4zM47 45H17a1 1 0 000 2h30a1 1 0 000-2zM47 39H17a1 1 0 000 2h30a1 1 0 000-2zM47 51H17a1 1 0 000 2h30a1 1 0 000-2z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

SvgSaveColor.defaultProps = {
  title: null,
  titleId: null,
};
SvgSaveColor.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgSaveColor;
