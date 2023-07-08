import axios from "axios";

//actions and payloads:
//account actions
export const accInit = "account/init";
export const incByAmt = "account/incrementByAmount";
export const inc = "account/increment";
export const dec = "account/decrement";
export const getUserPending = "account/getUser/pending";
export const getAccUserFulfilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";

//bouns actions
export const incBonus = "bonus/increment";

// Action Creators
export function getUserPendingFunc() {
  return { type: getUserPending };
}
export function getAccUserFulfilledFunc(payload) {
  return { type: getAccUserFulfilled, payload: payload };
}
export function getAccUserRejectedFunc(err) {
  return { type: getAccUserRejected, error: err };
}
export function incFunc() {
  return { type: inc };
}
export function decFunc() {
  return { type: dec };
}
export function incByAmtfunc(amt) {
  return { type: incByAmt, payload: amt };
}
export function getUser(id) {
  return async (dispatch, state) => {
    try {
      dispatch(getUserPendingFunc());
      const { data } = await axios.get(`http://localhost:3000/account/${id}`);
      // dispatch(incByAmtfunc(data.amount));
      dispatch(getAccUserFulfilledFunc(data.amount));
    } catch (error) {
      // console.log(error);
      dispatch(getAccUserRejectedFunc(error.message));
    }
  };
}
//bonus actions
export function incBonusFunc() {
  return { type: incBonus };
}
