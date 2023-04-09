const removeEmptyKeys = (obj: { [key: string]: string }) => {
  return Object.keys(obj)
    .filter(function (k) {
      return obj[k] != "";
    })
    .reduce(function (acc: { [key: string]: string }, k: string) {
      acc[k] = obj[k];
      return acc;
    }, {});
};

export default removeEmptyKeys;
