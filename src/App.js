import { connect } from "react-redux";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      {props.name}
      <br />
      <button onClick={() => props.changeName("gaurav")}>Change Name</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch({
        type: "UPDATE_NAME",
        payload: name,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
