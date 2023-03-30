export const getFormattedDate = (date: string) => {
  let endOfSlice = date.indexOf("T");
  if (endOfSlice === -1) endOfSlice = 10;
  const formattedDate = date.slice(0, endOfSlice);
  return formattedDate;
};
