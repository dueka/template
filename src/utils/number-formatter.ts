export const MaskPhoneNumber = (value: string) => {
  const strLen = value.length;
  if (strLen > 4) {
    return (
      value.substr(0, 1) +
      value.substr(1, strLen - 1).replace(/\w/g, "*") +
      value.substr(-1, 1)
    );
  }
  return value.replace(/\w/g, "*");
};
