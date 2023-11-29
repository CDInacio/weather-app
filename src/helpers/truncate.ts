export const truncate = (text: string, len: number) => {
  return `${text.substring(0, len)}...`;
};
