import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import logger from "redux-logger";

//actions
const postPending = "postsPending";
const postsFullfilled = "postsFullfilled";
const postsRejected = "postsRejected";

const store = createStore(
  postReducer,
  applyMiddleware(logger.default, thunk.default)
);

// Action Creators
function postPendingFx() {
  return { type: postPending };
}

function postsFullfilledFx(data) {
  return { type: postsFullfilled, payload: data };
}

function postRejectedFx(error) {
  return { type: postsRejected, error: error };
}

async function getPosts(dispatch, state) {
  try {
    dispatch(postPendingFx());
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    dispatch(postsFullfilledFx(data));
  } catch (error) {
    dispatch(postRejectedFx(error.message));
  }
}

// reducer
function postReducer(state = {}, action) {
  switch (action.type) {
    case postPending: {
      return { pending: true };
    }
    case postsFullfilled: {
      return { pending: false, data: action.payload };
    }
    case postsRejected: {
      return { pending: false, error: action.error };
    }
    default:
      return state;
  }
}

// dispatchAction
setTimeout(() => {
  store.dispatch(getPosts);
}, 1000);
