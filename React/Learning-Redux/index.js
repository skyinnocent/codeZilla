//imports:
import { createStore } from "redux";
//actions and payloads:
const incByAmt = "incByAmt";
const inc = "inc";
const dec = "dec";

// creating the store
const store = createStore(reducer);

function reducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case inc: {
      return { amount: state.amount + 1 };
    }
    case dec: {
      return { amount: state.amount + 1 };
    }
    case incByAmt: {
      return { amount: state.amount + action.payload };
    }
    default:
      return state;
  }
}

store.subscribe(() => console.log(store.getState()));

setInterval(() => {
  store.dispatch({ type: inc });
}, 2000);
