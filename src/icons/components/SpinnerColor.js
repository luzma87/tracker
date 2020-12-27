import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgSpinnerColor = ({ title, titleId, ...props }) => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g xmlns="http://www.w3.org/2000/svg">
        <path
          d="M59.077 108.416a17.852 17.852 0 003.139-10.943A20.325 20.325 0 0164.921 86.4 20.8 20.8 0 0182.937 76a20.336 20.336 0 0110.939 3.191 17.84 17.84 0 0011.045 2.753A18 18 0 00103.5 46a17.81 17.81 0 00-9.419 2.683A21.194 21.194 0 0182.937 52a20.8 20.8 0 01-18.013-10.4 20.325 20.325 0 01-2.705-11.069 17.852 17.852 0 00-3.139-10.943 18 18 0 00-30.418 19.204 17.819 17.819 0 007.032 6.816 21.178 21.178 0 018.445 7.992 20.8 20.8 0 010 20.8 21.178 21.178 0 01-8.445 7.992 17.819 17.819 0 00-7.032 6.816 18 18 0 0030.415 19.208z"
          fill="#b083e5"
          data-original="#bae543"
        />
        <g fill="#fd637b">
          <circle
            cx={103.5}
            cy={64}
            r={12}
            fill="#503087"
            data-original="#fd637b"
          />
          <circle
            cx={64.089}
            cy={64}
            r={6}
            fill="#503087"
            data-original="#fd637b"
          />
          <circle
            cx={44.25}
            cy={29.792}
            r={12}
            fill="#503087"
            data-original="#fd637b"
          />
        </g>
        <circle
          cx={44.25}
          cy={29.792}
          fill="#ff32d5"
          r={3}
          data-original="#da506a"
        />
        <circle
          cx={44.25}
          cy={98.208}
          fill="#503087"
          r={12}
          data-original="#fd637b"
        />
        <circle
          cx={44.25}
          cy={98.208}
          fill="#ff32d5"
          r={3}
          data-original="#da506a"
        />
        <circle
          cx={103.5}
          cy={64}
          fill="#ff32d5"
          r={3}
          data-original="#da506a"
        />
        <g fill="#2c0d12">
          <path
            d="M115.065 90.5a1.75 1.75 0 00-2.381.674A55.811 55.811 0 0164 119.75c-.248 0-.508 0-.757-.009a1.73 1.73 0 00-1.812 1.686 1.75 1.75 0 001.685 1.812c.291.011.593.011.884.011a59.314 59.314 0 0051.737-30.366 1.749 1.749 0 00-.672-2.384zM63.245 8.259c.249-.01.508-.013.757-.009a55.817 55.817 0 0148.692 28.594 1.75 1.75 0 103.056-1.707A59.322 59.322 0 0064 4.75c-.291 0-.593 0-.884.011a1.75 1.75 0 00-1.685 1.812 1.731 1.731 0 001.814 1.686zM8.252 64a55.561 55.561 0 017.871-28.57 1.748 1.748 0 00.249-.9v-.02a1.748 1.748 0 00-3.289-.817 59.289 59.289 0 00.038 60.676 1.75 1.75 0 103-1.8A55.561 55.561 0 018.252 64z"
            data-original="#2c0d12"
          />
          <path
            d="M72.33 110.48a1.758 1.758 0 00.321-.029A47.381 47.381 0 0099.87 94.729a1.75 1.75 0 00-2.657-2.279 43.874 43.874 0 01-25.2 14.56 1.75 1.75 0 00.318 3.47zM72.651 17.549a1.75 1.75 0 10-.639 3.441 43.835 43.835 0 0125.2 14.569 1.75 1.75 0 002.658-2.278 47.349 47.349 0 00-27.219-15.732zM21.676 47.2a1.753 1.753 0 00-2.234 1.065 47.365 47.365 0 000 31.47 1.75 1.75 0 103.3-1.17 43.86 43.86 0 010-29.13 1.75 1.75 0 00-1.066-2.235z"
            data-original="#2c0d12"
          />
          <path
            d="M118.217 50.839A19.689 19.689 0 0093.16 47.2a19.486 19.486 0 01-10.222 3.05 19.107 19.107 0 01-13.954-6.082 1.751 1.751 0 00-2.565 2.383 22.623 22.623 0 0016.519 7.2 22.982 22.982 0 0012.067-3.58 16.246 16.246 0 0124.644 15.683A16.418 16.418 0 01104.792 80.2a16.043 16.043 0 01-9.968-2.482 22.032 22.032 0 00-11.886-3.468A22.612 22.612 0 0063.41 85.524l-.016.029a22.045 22.045 0 00-2.925 12 16.072 16.072 0 01-2.833 9.875 16.417 16.417 0 01-19.854 5.692 16.111 16.111 0 01-8.96-9.838 16.277 16.277 0 011.357-13.2 16.1 16.1 0 016.344-6.148 22.986 22.986 0 009.134-8.661 22.61 22.61 0 000-22.548 22.986 22.986 0 00-9.134-8.661 16.1 16.1 0 01-6.344-6.148 16.277 16.277 0 01-1.357-13.2 16.111 16.111 0 018.96-9.838 16.419 16.419 0 0119.854 5.692 16.072 16.072 0 012.833 9.875 22.048 22.048 0 00-.011 1.666 1.75 1.75 0 103.5-.111q-.021-.7.01-1.4a19.723 19.723 0 00-27.591-18.923 19.771 19.771 0 00-9.229 27.99 19.6 19.6 0 007.721 7.482 19.493 19.493 0 017.757 7.327 19.1 19.1 0 010 19.048 19.493 19.493 0 01-7.757 7.327 19.685 19.685 0 00-9.372 23.52 19.825 19.825 0 0010.88 11.952A19.723 19.723 0 0063.966 97.4a18.543 18.543 0 012.473-10.116l.014-.026a19.107 19.107 0 0116.491-9.5 18.547 18.547 0 0110 2.917 19.724 19.724 0 0030.186-14.43 19.828 19.828 0 00-4.913-15.406z"
            data-original="#2c0d12"
          />
          <path
            d="M66.023 39.961a18.747 18.747 0 01-1.058-2.47 1.75 1.75 0 00-3.309 1.143 22.015 22.015 0 001.259 2.934 1.749 1.749 0 103.108-1.607zM76.5 72.54a1.77 1.77 0 00.424-.052 24.947 24.947 0 016.019-.738 1.75 1.75 0 100-3.5 28.432 28.432 0 00-6.864.842 1.75 1.75 0 00.421 3.448zM117.252 64A13.75 13.75 0 10103.5 77.75 13.766 13.766 0 00117.252 64zm-24 0A10.25 10.25 0 11103.5 74.25 10.261 10.261 0 0193.252 64zM64.091 71.75a7.75 7.75 0 10-7.75-7.75 7.759 7.759 0 007.75 7.75zm0-12a4.25 4.25 0 11-4.25 4.25 4.255 4.255 0 014.25-4.25zM56.159 22.917A13.745 13.745 0 1051.127 41.7a13.767 13.767 0 005.032-18.783zm-6.782 15.752a10.249 10.249 0 113.751-14 10.176 10.176 0 01-3.751 14z"
            data-original="#2c0d12"
          />
          <path
            d="M45.481 25.2a4.75 4.75 0 10-2.459 9.176 4.806 4.806 0 001.237.164 4.751 4.751 0 001.222-9.34zm-.022 4.911a1.247 1.247 0 11-.124-.948 1.237 1.237 0 01.124.952zM54.611 104.511a1.749 1.749 0 002.3-.923 13.757 13.757 0 10-6.526 6.93 1.75 1.75 0 00-1.558-3.135 10.25 10.25 0 114.864-5.168 1.75 1.75 0 00.92 2.296z"
            data-original="#2c0d12"
          />
          <path
            d="M46.627 94.1a4.75 4.75 0 00-6.489 1.738 4.753 4.753 0 004.106 7.127 4.8 4.8 0 001.237-.164 4.749 4.749 0 001.146-8.7zm-1.292 4.738a1.251 1.251 0 11.124-.948 1.244 1.244 0 01-.124.943zM108.252 64a4.75 4.75 0 10-4.75 4.75 4.756 4.756 0 004.75-4.75zm-6 0a1.25 1.25 0 111.25 1.25 1.251 1.251 0 01-1.25-1.25z"
            data-original="#2c0d12"
          />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

SvgSpinnerColor.defaultProps = {
  title: null,
  titleId: null,
};
SvgSpinnerColor.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
export default SvgSpinnerColor;
