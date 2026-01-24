export const preventAutoComplete = (str: string): string => {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("")
    .replace(" ", "");
};
