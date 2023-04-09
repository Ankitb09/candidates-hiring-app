// copied
const sortByFn = (
  items: Array<any>,
  key: string,
  sortDirection: string,
  isDate?: boolean
) => {
  if (isDate) {
    return items.slice(0).sort((a, b) => {
      if (sortDirection === "asc")
        return new Date(a[key]).getTime() - new Date(b[key]).getTime();

      return new Date(b[key]).getTime() - new Date(a[key]).getTime();
    });
  } else {
    return items.slice(0).sort((a, b) => {
      if (sortDirection === "asc")
        return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;

      return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
    });
  }
};

export default sortByFn;
