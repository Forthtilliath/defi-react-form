export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

// export const isEmpty = (value) => {
//   console.log("value === undefined", value === undefined);
//   console.log("value === null", value === null);
//   console.log("isNaN(value) ", isNaN(value));
//   console.log('typeof value === "object"', typeof value === "object");
//   return (
//     value === undefined ||
//     value === null ||
//     (typeof value === "object" && Object.keys(value).length === 0) ||
//     (typeof value === "string" && value.trim().length === 0)
//   );
// };
