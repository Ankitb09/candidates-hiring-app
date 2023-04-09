import { Candidate } from "../../@types/Candidate";
import { HeadingShape } from "../Main/config";
import * as S from "./styles";

interface TableRowProps {
  item: Candidate;
  headings: Array<HeadingShape>;
}

const TableRow = ({ item, headings }: TableRowProps) => {
  return (
    <>
      <S.RowWrapper>
        {headings?.map((heading, index) => {
          return heading?.key === "email" ? (
            <S.Td key={index}>
              <a href={`mailto:${item[heading.key]}`}>{item[heading.key]}</a>
            </S.Td>
          ) : (
            <S.Td key={index}>{item[heading.key as keyof Candidate]}</S.Td>
          );
        })}
      </S.RowWrapper>
    </>
  );
};

export default TableRow;
