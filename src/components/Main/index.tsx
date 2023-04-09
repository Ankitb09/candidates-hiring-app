import { useReducer, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Table from "../Table";
import useCandidate from "../../utils/useCandidate";
import { Headings } from "./config";
import { debounce, removeEmptyKeys } from "../../utils";
import {
  tableReducer,
  initialState,
  TableActionKind,
  FilterShape,
} from "./tableReducer";
import { SORT_DIRECTION } from "../../@types/Common";

const Main = () => {
  const { candidates, isLoading } = useCandidate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(tableReducer, initialState);

  useEffect(() => {
    dispatch({ type: TableActionKind.CANDIDATES_GET, payload: candidates });
  }, [candidates]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    const filteredObj = removeEmptyKeys(currentParams);

    // parsing query parameters to differentiate b/w filter and sorting params.
    // And also creating a partial state object so that all filters and sorting can be applied
    //let newObj = {}; //partial state object
    const newObj: FilterShape = {
      filterBy: {},
      sortBy: "name",
      orderBy: SORT_DIRECTION.ASC,
    };

    Object.keys(filteredObj).map((item) => {
      if (item.includes("filterBy")) {
        const key = item.replace("filterBy", "");
        newObj.filterBy = {
          [key]: filteredObj[item],
        };
      } else if (item.includes("sortBy")) {
        newObj["sortBy"] = filteredObj[item];
      } else if (item.includes("orderBy")) {
        newObj["orderBy"] = filteredObj[item] as SORT_DIRECTION;
      }
    });

    dispatch({
      type: TableActionKind.CANDIDATES_LIST_FILTER_SORT,
      filterObj: newObj,
    });

    setSearchParams(filteredObj);
  }, [candidates, searchParams]);

  const handleSorting = (key: string, direction = SORT_DIRECTION.ASC) => {
    // adding sorting param to URL
    searchParams.set("sortBy", key);
    searchParams.set("orderBy", direction);
    setSearchParams(searchParams);
  };

  const handleSearch = debounce((key: string, query: string) => {
    // adding search query params to URL
    searchParams.set(`filterBy${key}`, query);
    setSearchParams(searchParams);
  });

  return (
    <Table
      sortBy={state.sortBy}
      orderBy={state.orderBy}
      sortingFn={handleSorting}
      filterBy={state.filterBy}
      filterFn={handleSearch}
      headings={Headings}
      rows={state.data}
      isLoading={isLoading}
    />
  );
};

export default Main;
