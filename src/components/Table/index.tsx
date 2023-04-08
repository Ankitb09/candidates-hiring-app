import { Fragment } from "react";
import { Candidate } from "../../@types/Candidate";

import TableRow from "../TableRow";
import * as S from "./styles";


interface Heading {
  label: string;
  key: string;
  sortable: boolean;
  filterable: boolean;
}

interface TableProps {
  headings: Array<Heading>;
  rows: Array<Candidate>;
  isLoading: boolean;
}

const Table = ({ headings, rows, isLoading }: TableProps) => {
  return (
    <S.TableContainer>
      <S.TableHeader>
        {headings.map((item) => {
          const { key, label } = item;
          return (
            <Fragment key={key}>
              <S.Th>
                {label}
              </S.Th>
            </Fragment>
          );
        })}
      </S.TableHeader>

      {isLoading
        ? "loading.."
        : rows?.map((item) => <TableRow key={item.id} item={item} />)}
    </S.TableContainer>
  );
};

export default Table;
