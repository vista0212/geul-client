import React, { FC } from 'react';
import { ToastMessageWrapper } from './style';

const ToastMessage: FC = ({ children }) => {
  return (
    <ToastMessageWrapper>
      {children}
    </ToastMessageWrapper>
  );
};

export default ToastMessage;