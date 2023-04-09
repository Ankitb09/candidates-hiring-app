import { useReducer, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import Table from "../Table";
import useCandidate from "../../utils/useCandidate";
import { Headings } from "./config";
import { debounce, removeEmptyKeys } from '../../utils'
import { tableReducer, initialState, TableActionKind } from "./tableReducer";

const Main = () => {
    const { candidates, isLoading } = useCandidate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [state, dispatch] = useReducer(tableReducer, initialState);

    useEffect(() => {

        dispatch({ type: TableActionKind.CANDIDATES_GET, payload: candidates });

    }, [candidates])

    useEffect(() => {

        const currentParams = Object.fromEntries([...searchParams]);
        let filteredObj = removeEmptyKeys(currentParams);

        // parsing query parameters to differentiate b/w filter and sorting params.
        // And also creating a partial state object so that all filters and sorting can be applied
        let newObj = {}; //partial state object
        Object.keys(filteredObj).map((item) => {
            if (item.includes('filterBy')) {
                const key = item.replace('filterBy', '');
                newObj.filterBy = {
                    [key]: filteredObj[item]
                }
            } else {
                newObj[item] = filteredObj[item]
            }
        });

        // need to something here
        dispatch({ type: TableActionKind.CANDIDATES_LIST_FILTER_SORT, filterObj: newObj });

        setSearchParams(filteredObj);
    }, [candidates, searchParams]);


    const handleSorting = (key, direction = "asc") => {

        //dispatch({ type: TableActionKind.CANDIDATES_LIST_SORT, key, direction });


        // adding sorting param to URL
        searchParams.set("sortBy", key)
        searchParams.set("orderBy", direction)
        setSearchParams(searchParams)

    };

    const handleSearch = debounce((key, query) => {
        //dispatch({ type: TableActionKind.CANDIDATES_LIST_FILTER_SORT, key, query });

        // adding search query params to URL

        searchParams.set(["filterBy" + key], query);
        setSearchParams(searchParams)
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
