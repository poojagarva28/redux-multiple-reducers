import axios from "axios";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  console.log(props);

  const getData = () => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((res) => {
        console.log(res.data);
        props.udpateAccount(res.data["accountsPage"]);
        props.udpateProduct(res.data["productsPage"]);
        props.udpateDashboard(res.data["dasbhoardPage"]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>App Component</h1>
      <button onClick={getData}>getdata</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    udpateAccount: (accountData) => {
      dispatch({
        type: "UPDATE_ACCOUNT_DATA",
        payload: accountData,
      });
    },
    udpateDashboard: (dashboardData) => {
      dispatch({
        type: "UPDATE_DASHBOARD_DATA",
        payload: dashboardData,
      });
    },
    udpateProduct: (productData) => {
      dispatch({
        type: "UPDATE_PRODUCT_DATA",
        payload: productData,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
