import { createActions } from "redux-actions";
export const testTypes = {
  DEMO_NAME: "DEMO_NAME"
};

export default createActions({
  [testTypes.DEMO_NAME]: ({ name, age }) => ({ name, age })
});
