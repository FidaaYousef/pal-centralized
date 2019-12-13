import { FETCH_USER_PROFILE } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
