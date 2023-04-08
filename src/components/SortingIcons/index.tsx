import {
  IconCaretUp,
  IconCaretUpFill,
  IconCaretDown,
  IconCaretDownFill,
} from "../../icons";
import * as S from "./styles";

interface SortingIcons {
  orderBy: 'asc' | 'desc';
  isCurrentSorted: boolean;
  handleUpClick: () => void;
  handleDownClick: () => void,
}

const SortingIcons = ({
  orderBy,
  isCurrentSorted,
  handleUpClick,
  handleDownClick,
}: SortingIcons) => {
  const handleUpArrowClick = () => {
    handleUpClick();
  };

  const handleDownArrowClick = () => {
    handleDownClick();
  };

  return (
    <S.Wrapper>
      {isCurrentSorted && orderBy === "asc" ? (
        <IconCaretUpFill />
      ) : (
        <IconCaretUp onClick={handleUpArrowClick} />
      )}

      {isCurrentSorted && orderBy === "desc" ? (
        <IconCaretDownFill />
      ) : (
        <IconCaretDown onClick={handleDownArrowClick} />
      )}
    </S.Wrapper>
  );
};

export default SortingIcons;
