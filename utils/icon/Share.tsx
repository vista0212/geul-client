import React, { FC, MouseEventHandler } from 'react';
import IconWrapper from '../../components/IconWrapper';

interface IShare {
  onClick?: MouseEventHandler;
}

export const Share: FC<IShare> = ({ onClick }) => {
  return (
    <IconWrapper width={40} height={40} canClick={true}>
      <svg
        onClick={onClick}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.50004 20C6.50004 17.15 8.81671 14.8333 11.6667 14.8333H18.3334V11.6667H11.6667C7.06671 11.6667 3.33337 15.4 3.33337 20C3.33337 24.6 7.06671 28.3333 11.6667 28.3333H18.3334V25.1667H11.6667C8.81671 25.1667 6.50004 22.85 6.50004 20ZM13.3334 21.6667H26.6667V18.3333H13.3334V21.6667ZM28.3334 11.6667H21.6667V14.8333H28.3334C31.1834 14.8333 33.5 17.15 33.5 20C33.5 22.85 31.1834 25.1667 28.3334 25.1667H21.6667V28.3333H28.3334C32.9334 28.3333 36.6667 24.6 36.6667 20C36.6667 15.4 32.9334 11.6667 28.3334 11.6667Z"
          fill="#00E6BB"
        />
      </svg>
    </IconWrapper>
  );
};

export default Share;
