const initialState = {
  footballers: [],
  loading: true,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "getUsers":
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };

    case "createUser":
      return {
        ...state,
        createUser: action.payload,
        loading: false,
      };

    case "updateUser":
      return {
        ...state,
        updatedData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
