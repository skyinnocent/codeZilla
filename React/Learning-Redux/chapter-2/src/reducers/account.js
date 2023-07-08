import {
  inc,
  dec,
  incByAmt,
  getAccUserFulfilled,
  getAccUserRejected,
  getUserPending,
} from "../actions/actions";

// / Reducers
export function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case inc: {
      return { amount: state.amount + 1 };
    }
    case dec: {
      return { amount: state.amount - 1 };
    }
    case incByAmt: {
      return { amount: Number(state.amount) + Number(action.payload) };
    }
    case getUserPending: {
      return { ...state, pending: true };
    }
    case getAccUserFulfilled: {
      return { amount: state.amount + action.payload, pending: false };
    }
    case getAccUserRejected: {
      return { amount: state.amount, error: action.error, pending: false };
    }
    default:
      return state;
  }
}
