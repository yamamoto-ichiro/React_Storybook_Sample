import React from 'react';

interface Props {
  color?: string;
}

const ArrowDownIcon: React.FC<Props> = ({ color }) => (
  <svg
    width='8'
    height='4'
    viewBox='0 0 8 4'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 -3.49691e-07L8 4L0 4L4 -3.49691e-07Z'
      fill={color || '#A5B1C4'}
    />
  </svg>
);

export default ArrowDownIcon;
