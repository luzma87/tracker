import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgAddColor = ({ title, titleId, ...props }) => (
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
      <g xmlns="http://www.w3.org/2000/svg" fill="#4759b3">
        <circle cx={256} cy={256} r={236.17} data-original="#1138f7" />
        <path
          d="M256 512C114.853 512 0 397.167 0 256 0 114.853 114.853 0 256 0c141.167 0 256 114.853 256 256 0 141.167-114.833 256-256 256zm0-472.341C136.705 39.659 39.659 136.705 39.659 256S136.705 472.341 256 472.341 472.341 375.275 472.341 256c0-119.295-97.046-216.341-216.341-216.341z"
          data-original="#1138f7"
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <path
          d="M256 373.193c-10.946 0-19.83-8.864-19.83-19.83V155.067c0-10.946 8.884-19.83 19.83-19.83 10.946 0 19.83 8.884 19.83 19.83v198.296c0 10.966-8.884 19.83-19.83 19.83z"
          data-original="#ffffff"
        />
        <path
          d="M355.148 274.045H156.852c-10.946 0-19.83-8.884-19.83-19.83 0-10.946 8.884-19.83 19.83-19.83h198.296c10.966 0 19.83 8.884 19.83 19.83 0 10.946-8.864 19.83-19.83 19.83z"
          data-original="#ffffff"
        />
      </g>
    </svg>
  </SvgIcon>
);

SvgAddColor.defaultProps = {
  title: null,
  titleId: null,
};
SvgAddColor.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgAddColor;
