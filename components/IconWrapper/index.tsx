import React, { FC, ReactNode } from 'react';

interface IIconWrapper {
  width: number;
  height: number;
}

const IconWrapper: FC<IIconWrapper> = ({ children, width, height }) => {
  return (
    <span className="icon_wrapper" style={{ width, height }}>
      {children}
    </span>
  )
}

export default IconWrapper;