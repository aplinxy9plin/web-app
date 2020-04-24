import React, { Component } from 'react';
import {
  GoogleMap, LoadScript, Marker, InfoWindow,
} from '@react-google-maps/api';
import { Container } from 'semantic-ui-react';
import Item from '../Item/Item';

class GoogleMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: null,
    };
  }

  render() {
    const { activeMarker } = this.state;
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyCGyiMJJN1oMXco3SRCdPIpKRU989xEMVY"
      >
        <GoogleMap
          options={{
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
          }}
          id="circle-example"
          mapContainerStyle={{
            minHeight: '500px',
            height: '100%',
            width: '100%',
          }}
          zoom={7}
          center={{
            lat: -3.745,
            lng: -38.523,
          }}
        >
          <Marker
            position={{
              lat: -3.745,
              lng: -38.523,
            }}
            onClick={() => this.setState({ activeMarker: 1 })}
          />
          {
            activeMarker
              && (
              <InfoWindow
                position={{
                  lat: -3.745,
                  lng: -38.523,
                }}
                onCloseClick={() => this.setState({ activeMarker: null })}
              >
                <Container>
                  <Item modal />
                </Container>
              </InfoWindow>
              )
          }
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default GoogleMapComponent;
