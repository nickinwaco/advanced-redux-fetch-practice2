import {combineReducers} from "redux";

// reducer example
export function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}

export function contacts(state = [], action) {
  if (action.type === "CONTACTS_LOADED") {
    return action.value;
  }
  return state;
}

export function vehicles(state = [], action) {
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}

export function products(state = [], action) {
  if (action.type === "PRODUCTS_LOADED") {
    return action.products;
  }
  return state;
}

function users(state = [], action) {
  if (action.type === "USERS_LOADED") {
    return action.value;
  }
  return state;
}

// the reducer connect below MUST MATCH state.js
const rootReducer = combineReducers({
  comments,
  contacts,
  vehicles,
  products,
  users
});
export default rootReducer;
