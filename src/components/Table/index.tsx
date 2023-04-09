import { Fragment } from "react";
import { Candidate } from "../../@types/Candidate";
import SortingIcons from '../SortingIcons';
import Input from "../Input";

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
  sortBy: string;
  orderBy: string;
  sortingFn: any;
  filterFn: any;
  filterBy: Object
}

const Table = ({ sortBy, orderBy, sortingFn, filterFn, filterBy, headings, rows, isLoading }: TableProps) => {
  return (
    <S.TableContainer>
      <S.TableHeader>
        {headings.map((item) => {
          const { key, label, sortable, filterable } = item;
          return (
            <Fragment key={key}>
              <S.Th isSortable={sortable}>
                {label}
                {sortable && !isLoading && (
                  <SortingIcons
                    orderBy={orderBy}
                    isCurrentSorted={key === sortBy}
                    handleUpClick={() => {
                      sortingFn(key, "asc");
                    }}
                    handleDownClick={() => {
                      sortingFn(key, "desc");
                    }}
                  />
                )}
                {filterable && !isLoading && (
                  <S.InputWrapper>
                    <Input
                      changeHandlerFn={(val) => {
                        filterFn(key, val);
                      }}
                    />
                  </S.InputWrapper>
                )}
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
