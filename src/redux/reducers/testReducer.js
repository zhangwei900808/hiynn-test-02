import { handleActions } from "redux-actions";
import testAction, { testTypes } from "../actions/testAction";
const initState = {
  name: "test",
  age: 18
};

const testReducer = handleActions(
  {
    [testTypes.DEMO_NAME]: (state, action) => {
      return Object.assign({}, state, action.payload.name);
    }
  },
  initState
);

export default testReducer;
