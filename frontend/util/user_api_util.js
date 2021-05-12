export const login = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });

export const signup = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });

export const fetchUser = (userId) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
  });

export const updateUser = (user) =>
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user },
  });
