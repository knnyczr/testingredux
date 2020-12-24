///////////////////////////////////////////////////
// Your Reducer, this runs and updates the store when dispatch is invoked
// The return value becomes the new state of the store
// usually action is a object with a payload property that triggers the appropriate action
/////////////////////////////////////////////////////

const initialState = require('./initial')

export default (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + action.payload };
      break;

    case "sub":
      return { ...state, count: state.count - action.payload };
      break;

    default:
      return state;
  }
};
