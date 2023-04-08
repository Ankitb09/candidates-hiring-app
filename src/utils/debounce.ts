// copied
const debounce = (
  func: { apply: (arg0: undefined, arg1: unknown) => void },
  timeout = 300
) => {
  let timer: number | undefined;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
export default debounce;