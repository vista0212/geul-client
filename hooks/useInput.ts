import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

type Handler = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;
type ReturnTypes = [string, Handler, Dispatch<SetStateAction<string>>];
const useInput = (initialValue: string): ReturnTypes => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value),
    [],
  );
  return [value, handler, setValue];
};

export default useInput;
