export const formatDate = (currentDate: string): string => {
  const date = new Date(currentDate);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formatClock = (currentDate: string): string => {
  const date = new Date(currentDate);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return `${hours < 10 ? 0 : ""}${hours}.${minutes < 10 ? 0 : ""}${minutes}`;
};

export const fixedOutputFloat = (value: number): number =>
  parseFloat(value.toFixed(2));
