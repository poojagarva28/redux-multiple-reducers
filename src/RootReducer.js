const obj = {
  name: "pooja",
  age: 24,
};

export const RootReducer = (state = obj, action) => {
  if (action.type === "UPDATE_NAME") {
    return { ...state, name: action.payload };
  }
  return state;
};
