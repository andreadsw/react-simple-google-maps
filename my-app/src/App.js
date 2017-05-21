import React, { Component } from "react";
import "./App.css";
import GoogleMap from "../src/components/GoogleMap/GoogleMap";

class App extends Component {
  // construct to set the default state. Map loads in Australia
  // accordingly with lat and lng above

  constructor(props) {
    super(props);
    this.state = { lat: -34.397, lng: 150.644 };
  }

  // render button accordingly with the city lat and lng. Through event handler onClick
  // Click the button then this.setState is activated with the lat and lng then send the
  // as a props to GoogleMap which receives through this.state.lat or this.state.lng
  render() {
    return (
      <div className="App container" style={{ height: "100%" }}>
        <div className="App-header">
          <h2>Google Maps - React life cycle</h2>
        </div>
        <p className="App-intro">
          <br />
          This is GoogleMap using the react life cycle purely without any library.
        </p>
        <blockquote>
          <p>
            The react life cycle: The common path is: Birth(mounting), Growth(updating) and Death(unmounting).
            {" "}
            When the application is first started, we consider this Birth. The users interacts with application,
            {" "}
            which is Growth. Eventually, the application is closed or navigated away from, leading to Death.
          </p>
          <footer>
            From (Polanco, J. and Pedersen A.)
            React life cycle:
            {" "}
            <a
              href="https://developmentarc.gitbooks.io/react-indepth/content/"
              target="_blank"
            >
              https://developmentarc.gitbooks.io/react-indepth/content/
            </a>
            {" "}
            [accessed at: 21/May/2017 ]
          </footer>
        </blockquote>
        <br />
        <button
          className="btn btn-primary btn-lg"
          onClick={() => this.setState({ lat: 40.7128, lng: -74.005 })}
        >
          New York
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => this.setState({ lat: -22.9707, lng: -43.1823 })}
        >
          Rio de Janeiro
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => this.setState({ lat: 51.5098, lng: -0.1180 })}
        >
          London
        </button>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;
