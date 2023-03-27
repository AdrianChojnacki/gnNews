export const getFormattedDate = (date: string) => {
  const endOfSlice = date.indexOf("T");
  const formattedDate = date.slice(0, endOfSlice);
  return formattedDate;
};
