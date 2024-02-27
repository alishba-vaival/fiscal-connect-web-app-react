import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Dashboard
import Dashboard from "./dashboard/reducer";

const rootReducer = combineReducers({
    // public
    Layout,
    Dashboard
});

export default rootReducer;