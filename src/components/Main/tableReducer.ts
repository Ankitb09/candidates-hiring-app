import { Candidate } from "../../@types/Candidate";
import { SORT_DIRECTION } from "../../@types/Common";
import { sortByFn, filterFn } from "../../utils";

export enum TableActionKind {
  CANDIDATES_GET = "CANDIDATES_GET",
  CANDIDATES_GET_ERROR = "CANDIDATES_GET_ERROR",
  CANDIDATES_LIST_SORT = "CANDIDATES_LIST_SORT",
  CANDIDATES_LIST_FILTER_SORT = "CANDIDATES_LIST_FILTER_SORT",
}

interface TableState {
  originalData: Array<Candidate>;
  data: Array<Candidate>;
  isError: boolean;
  filterBy: {
    [key: string]: string;
  };
  sortBy: string;
  orderBy: SORT_DIRECTION;
}

export interface FilterShape {
  orderBy: SORT_DIRECTION;
  sortBy: string;
  filterBy: {
    [key: string]: string;
  };
}

export const initialState: TableState = {
  originalData: [],
  data: [],
  isError: false,
  filterBy: {},
  sortBy: "",
  orderBy: SORT_DIRECTION.ASC,
};

interface TableAction {
  type: TableActionKind;
  payload?: any;
  key?: string;
  direction?: SORT_DIRECTION;
  query?: string;
  filterObj?: FilterShape;
}

export const tableReducer = (
  state: TableState,
  action: TableAction
): TableState => {
  switch (action.type) {
    case TableActionKind.CANDIDATES_GET:
      return {
        ...state,
        isError: false,
        data: action.payload,
        originalData: action.payload,
      };

    case TableActionKind.CANDIDATES_GET_ERROR:
      return {
        ...state,
        isError: true,
        data: action.payload,
      };

    case TableActionKind.CANDIDATES_LIST_FILTER_SORT: {
      let finalData = [...state.originalData];

      if (action.filterObj) {
        const { filterBy, sortBy, orderBy } = action.filterObj;

        if (filterBy) {
          const filteringKeys = Object.keys(filterBy);
          filteringKeys.map((key) => {
            finalData = filterFn(finalData, filterBy[key], [key]);
          });
        }

        if (orderBy && sortBy) {
          finalData = sortByFn(finalData, sortBy, orderBy);
        }
      }

      return {
        ...state,
        data: finalData,
        ...action.filterObj,
      };
    }

    default:
      return state;
  }
};
