import React, { FC } from 'react';

interface IIconWrapper {
  width: number;
  height: number;
  canClick?: boolean;
}

const IconWrapper: FC<IIconWrapper> = ({ children, width, height, canClick }) => {
  return (
    <span className="icon_wrapper" style={{ width, height, cursor: canClick ? 'pointer' : 'none' }}>
      {children}
    </span>
  );
};

export default IconWrapper;