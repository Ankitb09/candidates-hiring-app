const filterFn = (data: Array<any>, search: string, keys: Array<string>) => {
  const lowSearch = search.toLowerCase();
  return data.filter((item) =>
    keys.some((key) => String(item[key]).toLowerCase().includes(lowSearch))
  );
};

export default filterFn;
