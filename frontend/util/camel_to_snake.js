export const convertToSnakeCase = (obj) => {
  // via Tim Fraczak
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

// const formData = new FormData();
// formData.append("key1", "value1");
// formData.append("key2", "value2");
// formData.append("displayName2", "displayNamevalue2");
// formData.append("userName2", "displayNamevalue2");

export const formDataConvert = (formData) => {
  const retFormData = new FormData();
  const camelToSnakeCase = (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  for (let pair of formData.entries()) {
    let newKey = camelToSnakeCase(pair[0]);
    retFormData.append(newKey, pair[1]);
  }
  return retFormData;
};

// console.log(formData);
