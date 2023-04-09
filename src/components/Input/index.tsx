import React, { useEffect, useState } from "react";

interface InputProps {
  changeHandlerFn: (elementName: string) => void;
  defaultValue: string;
}

const Input = ({ changeHandlerFn, defaultValue = "" }: InputProps) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    changeHandlerFn(e.target.value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return <input type="text" value={value} onChange={onChangeHandler} />;
};

export default Input;
