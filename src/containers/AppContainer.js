import { connect } from "react-redux";
import App from "../App";
import {loadContacts, loadVehicles, loadComments, loadProducts} from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: function (contacts) {
      const action = loadContacts(contacts);
      dispatch(action);
    },
    loadVehicles: function (vehicles) {
      const action = loadVehicles(vehicles);
      dispatch(action);
    },
    loadComments: function (comments) {
      const action = loadComments(comments);
      dispatch(action);
    },
    loadProducts: function (products) {
      const action = loadProducts(products);
      dispatch(action);
    },

  };
}


export default connect(null, mapDispatchToProps)(App);
