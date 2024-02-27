import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";
// Dashboard CRM
import dashboardSaga from "./dashboard/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(dashboardSaga)
  ]);
}
