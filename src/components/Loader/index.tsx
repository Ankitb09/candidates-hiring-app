import * as S from "./styles";

const Loader = () => {
  return (
    <S.LoadingOuter>
      <S.LoadingMiddle>
        <S.LoadingInner></S.LoadingInner>
      </S.LoadingMiddle>
    </S.LoadingOuter>
  );
};

export default Loader;
