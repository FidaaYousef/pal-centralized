import postReducer from "./postReducer";
import userPro from "./userPro";
import companyProfile from "./companyProfile";
import Profilesubmit from "./edituser";
import { reducer as form } from "redux-form"; ///// for Calender__
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userPro,
  company: companyProfile,
  profile: Profilesubmit
});

export default rootReducer;
