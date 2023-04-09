import { Fragment } from "react";
import SortingIcons from "../SortingIcons";
import Input from "../Input";

import TableRow from "../TableRow";
import * as S from "./styles";
import { SORT_DIRECTION } from "../../@types/Common";
import { Candidate } from "../../@types/Candidate";

interface Heading {
  label: string;
  key: string;
  sortable: boolean;
  filterable: boolean;
}

// interface TableProps {
//   headings: Array<Heading>;
//   rows: Array<Candidate>;
//   isLoading: boolean;
//   sortBy: string;
//   orderBy: string;
//   sortingFn: any;
//   filterFn: any;
//   filterBy: Object
// }

interface ObjectWithId {
  id: string | number;
}

interface TableProps<
  T extends ObjectWithId,
  F extends (item: never) => void = (item: T) => void // <--- expose the type
> {
  rows: T[];
  // searchKey: K;
  onClick?: F;
  headings: Array<Heading>;
  isLoading: boolean;

  sortingFn: (key: string, sortDirection: SORT_DIRECTION) => void;
  filterFn: (key: string, val: string) => void;
  filterBy: {
    [key: string]: string;
  };
  orderBy: SORT_DIRECTION;
  sortBy: string;
}

// Fix candidate with Generics

const Table = ({
  sortBy,
  orderBy,
  sortingFn,
  filterFn,
  filterBy,
  headings,
  rows,
  isLoading,
}: TableProps<Candidate>) => {
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
                      sortingFn(key, SORT_DIRECTION.ASC);
                    }}
                    handleDownClick={() => {
                      sortingFn(key, SORT_DIRECTION.DESC);
                    }}
                  />
                )}
                {filterable && !isLoading && (
                  <S.InputWrapper>
                    <Input
                      defaultValue={filterBy[key]}
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
