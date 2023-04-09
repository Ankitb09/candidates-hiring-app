import React, { useEffect, useState } from "react";
import * as S from "./styles";

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

  return <S.Input type="text" value={value} onChange={onChangeHandler} />;
};

export default Input;
