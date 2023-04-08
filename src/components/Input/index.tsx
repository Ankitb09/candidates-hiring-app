import React, { useState } from "react";

interface InputProps {
  changeHandlerFn: (elementName: string) => void;
}

const Input = ({ changeHandlerFn }: InputProps) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    changeHandlerFn(e.target.value);
  };

  return <input type="text" value={value} onChange={onChangeHandler} />;
};

export default Input;
