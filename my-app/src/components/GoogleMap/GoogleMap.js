import React, { Component } from "react";
/* 
React training Udemy: React integration with third party (section 7 - 111)
This is GoogleMap using the react life cycle purely without any library.
The react life cycle: The common path is Birth(mounting), Growth(updating) and Death(unmounting). 
UI applications often follow a similar pattern. However, Not all UI do that. 
When the application is first started, we consider this Birth. The users interacts with application, 
which is Growth. Eventually, the application is closed or navigated away from, leading to Death.
*/

export default class extends Component {
  shouldComponentUpdate() {
    return false;
  }

  // Updating state: passing in the new prop value.
  // panTo changes the center of the map to the given LatLng. panTo is part of Google Maps API.
  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }

  componentDidMount() {
    // this line is very important.
    // if you use Create React App, you need to explicitly grab global variables from window.
    const google = window.google;

    // componentDidMount() to generate our map, bind it to the DOM using refs.
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }
  render() {
    return (
      // id="map" it is only for css styling. ref is to get a direct reference to a DOM element
      <div id="map" ref="map" />
    );
  }
}
