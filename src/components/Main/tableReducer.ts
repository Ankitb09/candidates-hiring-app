import { sortBy, filter } from "../../utils";


export enum TableActionKind {
  CANDIDATES_GET = 'CANDIDATES_GET',
  CANDIDATES_GET_ERROR = 'CANDIDATES_GET_ERROR',
  CANDIDATES_LIST_SORT = 'CANDIDATES_LIST_SORT',
  CANDIDATES_LIST_FILTER_SORT = 'CANDIDATES_LIST_FILTER_SORT',
}

// data: [],
// filteredData: [],
// error: false,
// /**
//  * 
//  * name: "",
//   status: "",
//   position: "",
// */
// filterBy: {},
// /**
//  *
//  * position_applied: "desc",
//  */
// sortBy: {},

interface TableState {
  originalData: [],
  data: [],
  error: boolean,
  filterBy: {},
  sortBy: string,
  orderBy: string
}
export const initialState: TableState = {
  originalData: [],
  data: [],
  error: false,
  filterBy: {},
  sortBy: '',
  orderBy: '',
}

interface TableAction {
  type: TableActionKind;
  payload?: any;
  key?: string;
  direction?: 'asc' | 'desc';
  query?: string;
}

export const tableReducer = (state: TableState, action: TableAction): TableState => {
  switch (action.type) {
    case TableActionKind.CANDIDATES_GET:
      return {
        ...state,
        error: false,
        data: action.payload,
        originalData: action.payload,
      };

    case TableActionKind.CANDIDATES_GET_ERROR:
      return {
        ...state,
        error: true,
        data: action.payload,
        originalData: action.payload,
      };

    case TableActionKind.CANDIDATES_LIST_SORT:
      const sortedData = sortBy(state.data, action.key, action.direction);
      return {
        ...state,
        data: sortedData,
        sortBy: action.key,
        orderBy: action.direction,
      };

    case TableActionKind.CANDIDATES_LIST_FILTER_SORT:

      const newFilterObj = { ...state.filterBy, [action.key]: action.query };
      let filteredData = [...state.originalData];

      Object.keys(newFilterObj).map((key) => {
        filteredData = filter(filteredData, newFilterObj[key], [key]);
      });

      const sortKey = Object.keys(state.sortBy)[0];

      const filteredSortedData = sortBy(
        filteredData,
        sortKey,
        state.sortBy[sortKey]
      );

      return {
        ...state,
        data: filteredSortedData,
        filter: {
          ...state.filter,
          [action.key]: action.query,
        },
      };

    default:
      return state;
  }
};
