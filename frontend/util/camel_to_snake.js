// const camelToSnakeCaseKey = (key) => {
//   var result = key.replace(/([A-Z])/g, " $1");
//   return result.split(" ").join("_").toLowerCase();
// };

// export const camelToSnakeCase = (obj) => {
//   let newObj = {};
//   let keys = Object.values(obj);
//   let convertedKeys = keys.map((key) => camelToSnakeCaseKey(key));
//   for (let i = 0; i < keys.length; i++) {
//     newObj[convertedKeys[i]] = values[i];
//   }
//   return newObj;
// };
export const convertToSnakeCase = (obj) => {
  const camelToSnakeCase = (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  let newObj = {};
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let convertedKeys = keys.map((key) => camelToSnakeCase(key));
  for (let i = 0; i < keys.length; i++) {
    newObj[convertedKeys[i]] = values[i];
  }
  return newObj;
};
// export default camelToSnakeCase;
