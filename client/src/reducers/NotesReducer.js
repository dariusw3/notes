import _ from "lodash";

const NotesReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_NOTES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_NOTE":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_NOTE":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_NOTE":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_NOTE":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default NotesReducer;
