export const getUser = (userData: any) => {
  return {
    type: "getUsers",
    payload: userData,
  };
};

export const createUser = (data: any) => {
  return {
    type: "createUser",
    payload: data,
  };
};

export const updateUser = (updatedData: any) => {
  return {
    type: "updateUser",
    payload: updatedData,
  };
};
