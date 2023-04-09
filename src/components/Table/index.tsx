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

export interface ObjectWithId {
  id: string | number;
}

interface TableProps<T extends ObjectWithId> {
  rows: T[];
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
                <S.labelWrapper>
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
                </S.labelWrapper>
                <div>
                  {filterable && !isLoading && (
                    <Input
                      defaultValue={filterBy[key]}
                      changeHandlerFn={(val) => {
                        filterFn(key, val);
                      }}
                    />
                  )}
                </div>
              </S.Th>
            </Fragment>
          );
        })}
      </S.TableHeader>

      {isLoading
        ? "loading.."
        : rows?.map((item) => (
            <TableRow key={item.id} item={item} headings={headings} />
          ))}

      {!isLoading && !rows.length && <div> no data to display</div>}
    </S.TableContainer>
  );
};

export default Table;
