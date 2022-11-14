let defaultState = {
  selectedItems: { items: [], restaurantName: " " },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Add_To_Cart": {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState, "New State");
      return newState;
    }
    default:
      return state;
  }
};
export default cartReducer;
