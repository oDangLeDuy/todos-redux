import { SHOW_ALL, SET_VISIBILITY_FILTER } from "../constants";

const visibilityFilter = (type = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return type 
  }
}

export default visibilityFilter
