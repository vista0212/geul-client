import React, { FC } from 'react';
import { IconWrapperSpan } from './style';

interface IIconWrapper {
  children: React.ReactNode;
  width: number;
  height: number;
  canClick?: boolean;
}

const IconWrapper: FC<IIconWrapper> = ({
  children,
  width,
  height,
  canClick,
}) => {
  return (
    <IconWrapperSpan
      className={canClick ? '' : 'icon-wrapper--default'}
      style={{ width, height, cursor: canClick ? 'pointer' : 'none' }}
    >
      {children}
    </IconWrapperSpan>
  );
};

export default IconWrapper;
