import React from "react";
import ReactDom from "react-dom";
import "./styles.scss";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import { add, sub } from "./redux/actions";

const App = (props) => {
  //Grab a Variable from the Store
  const count = useSelector((store) => store.count);

  //Get the Dispatch Function
  const dispatch = useDispatch();

  //Passing an action into dispatch allows us to trigger the reducer with the right type and pass the payload
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(add(2))}>Add</button>{" "}
      <button onClick={() => dispatch(sub(2))}>Subtract</button>
    </div>
  );
};

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
