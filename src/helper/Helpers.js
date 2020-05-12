export const formatFullDate = (date) => {
  let datePicker =
    parseInt(date.getMonth() + 1) +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear();
  return datePicker;
};
