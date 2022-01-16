export const isObject = (variable) => {
  if (variable) {
    return Object.keys(variable).length > 0;
  }
  return false;
};
