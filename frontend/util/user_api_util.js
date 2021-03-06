import * as convert from "../util/camel_to_snake";

export const login = (userData) => {
  let user = convert.convertToSnakeCase(userData);

  const req = $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });
  return req;
};

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });

export const signup = (userData) => {
  let user = convert.convertToSnakeCase(userData);

  const req = $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });
  return req;
};

export const fetchUser = (userId) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
  });

export const updateUser = (user, userId) => {
  let formData = convert.formDataConvert(user);
  
  const req = $.ajax({
    method: "PATCH",
    url: `/api/users/${userId}`,
    data: formData,
    contentType: false,
    processData: false,
  });
  return req;
};
