export const isEmpty = (value) => 
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0);
  
export const timestampParser = (timestamp) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Date(timestamp).toLocaleDateString("fr-FR", options).toString();
};

export const generateDate = () => {
  const now = new Date();
  const hours = Math.floor(Math.random() * 11 + 8);
  const minutes = Math.floor(Math.random() * 4) * 15;
  const day = now.getDate() + Math.floor(Math.random() * 14 + 1);

  return new Date(now.getFullYear(), now.getMonth(), day, hours, minutes, 0);
};
