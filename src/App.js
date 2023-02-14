import React from "react";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: uuidv4(),
    };
  }

  componentDidMount = () => {
    var uuid = uuidv4();
    if (localStorage.getItem("uuid") != undefined) {
      this.setState({
        uuid: this.getCookie("uuid"),
      });
    } else {
      this.setState(
        {
          uuid,
        },
        () => {
          document.cookie = "uuid=" + uuid + "; expires=Thu, 18 Dec 2033 12:00:00 UTC";
          localStorage.setItem("uuid", uuid);
        }
      );
    }

    console.log(this.getCookie("uuid"));
  };
  getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  render() {
    return <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 50 }}>localstorage : {this.state.uuid}</div>;
  }
}

export default App;
