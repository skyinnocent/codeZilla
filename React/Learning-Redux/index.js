//imports:
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

//actions and payloads:
//account actions
const accInit = "account/init";
const incByAmt = "account/incrementByAmount";
const inc = "account/increment";
const dec = "account/decrement";
const getUserPending = "account/getUser/pending";
const getAccUserFulfilled = "account/getUser/fulfilled";
const getAccUserRejected = "account/getUser/rejected";

//bouns actions
const incBonus = "bonus/increment";

// creating the store
const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer }),
  applyMiddleware(thunk.default)
);

// Action Creators
function initFunc() {
  return { type: accInit };
}
function incFunc() {
  return { type: inc };
}
function decFunc() {
  return { type: dec };
}
function incByAmtfunc(amt) {
  return { type: incByAmt, payload: amt };
}
function getUser(id) {
  return async (dispatch, state) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/users/${id}`);
      // dispatch(incByAmtfunc(data.amount));
      dispatch(incFunc());
    } catch (err) {
      console.log(err);
    }
  };
}
//bonus actions
function incBonusFunc() {
  return { type: incBonus };
}

// Reducers
function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case inc: {
      return { amount: state.amount + 1 };
    }
    case dec: {
      return { amount: state.amount - 1 };
    }
    case incByAmt: {
      return { amount: state.amount + action.payload };
    }
    case accInit: {
      return { amount: state.amount + 1 };
    }
    default:
      return state;
  }
}
function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incBonus: {
      return { points: state.points + 1 };
    }
    default:
      return state;
  }
}

// loging the state
store.subscribe(() => console.log(store.getState()));

// dispatching action
setInterval(() => {
  store.dispatch(getUser(1));
}, 2000);
