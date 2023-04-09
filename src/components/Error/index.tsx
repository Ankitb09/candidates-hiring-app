import { useNavigate } from "react-router";
import * as S from "./styles";

interface ErrorProps {
  label: string;
}

const Error = ({ label }: ErrorProps) => {
  const navigate = useNavigate();

  return (
    <S.ErrorContainer>
      {label}
      <button
        onClick={() => {
          navigate(0);
        }}
      >
        Retry
      </button>
    </S.ErrorContainer>
  );
};

export default Error;
