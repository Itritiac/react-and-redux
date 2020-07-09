export const required = (value) => {
  if (value) return undefined;

  return "Your minds are very important to us";
}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
}
