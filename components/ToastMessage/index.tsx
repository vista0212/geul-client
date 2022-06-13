import React, { FC, useEffect } from 'react';
import { ToastMessageWrapper } from './style';

interface IToastMessage {
  children: React.ReactNode;
  isActive: boolean;
  setIsActive: (v: boolean) => void;
}

const ToastMessage: FC<IToastMessage> = ({
  children,
  isActive,
  setIsActive,
}) => {
  useEffect(() => {
    if (isActive) {
      setTimeout(() => setIsActive(false), 2000);
    }
  });
  return isActive ? (
    <ToastMessageWrapper>{children}</ToastMessageWrapper>
  ) : (
    <></>
  );
};

export default ToastMessage;
