// actions file for combineReducers

// default example
export function decreaseCounter() {
  return {
    type: "DECREASE_COUNTER"
  };
}

// thunk example
export function loadContacts() {
  return function (dispatch) {  // this is the thunk
    dispatch({
      type: "LOAD_CONTACTS"
    });
    fetch("/contacts")
   .then( (response) => {
     return response.json();
   }).then((contacts) => {
     dispatch(contactsLoaded(contacts));
   });
  };
}

export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

export function loadVehicles() {
  return function (dispatch) {  // this is the thunk
    dispatch({
      type: "LOAD_VEHICLES"
    });
    fetch("/vehicles")
   .then( (response) => {
     return response.json();
   }).then((vehicles) => {
     dispatch(vehiclesLoaded(vehicles));
   });
  };
}

export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}


export function loadComments() {
  return function (dispatch) {  // this is the thunk
    dispatch({
      type: "LOAD_COMMENTS"
    });
    fetch("/comments")
   .then( (response) => {
     return response.json();
   }).then((comments) => {
     dispatch(commentsLoaded(comments));
   });
  };
}

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}


export function loadProducts() {
  return function (dispatch) {  // this is the thunk
    dispatch({
      type: "LOAD_PRODUCTS"
    });
    fetch("/products")
   .then( (response) => {
     return response.json();
   }).then((products) => {
     dispatch(productsLoaded(products));
   });
  };
}

export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    products: products
  };
}

// //////// CREATE DATA ///////////////////////////////

// export function createContact(contact) {
//   return function (dispatch) {  // this is the thunk
//     dispatch({
//       type: "CREATE_CONTACTS"
//     });
//     fetch("/contacts",{
//       method: "POST",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify({contact: "nick"})
//     });
//    .then( (response) => {
//      return response.json();
//    }).then((contacts) => {
//      dispatch(loadContacts());
//    });
//   };
// }

export function createContact(contact) {
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(contact)
    }).then(() => dispatch(loadContacts()));
  };
}

export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}

export function createComment(comment) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(comment)
    }).then(() => dispatch(loadComments()));
  };
}

export function createVehicle(vehicle) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(vehicle)
    }).then(() => dispatch(loadVehicles()));
  };
}
