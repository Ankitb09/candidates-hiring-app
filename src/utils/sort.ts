// copied
const sortByItems = (
  items: Array<any>,
  key: string,
  sortDirection: string
) => {
  return items.slice(0).sort((a, b) => {
    if (sortDirection === "asc")
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;

    return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
  });
};

export default sortByItems;