import moment from "moment";

export const format = (value: string, format: string) => {
  return moment(value).format(format);
};
