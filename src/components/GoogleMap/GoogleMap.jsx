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
      result: null,
      lat: null,
      lng: null,
      item: null,
    };
  }

  componentDidMount() {
    const myHeaders = new Headers();
    myHeaders.append('Token', 'AqgeOIM0Hbbm99KLKcdUzyh0TIifgQgbVK4dHbOZm4jiaS_--IrK-vkXHZTDW6Tj6k-brynmTQhjUFVk1UkSGQK9Tsutu9aH-r_s_sSn5h9-jT3KLRQtUeT5HVyXVdYP6ProNPKiEMzeBo_t87Bqf2jk_Tl4sS902qANfI2TlR3qaOqT6y6KgzPIv8kc');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://cors-anywhere.herokuapp.com/https://cf931bb1.ngrok.io/get_label', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ result });
      })
      .catch((error) => console.log('error', error));
  }

  chooseMarker = (e) => {
    const item = this.state.result.filter((item) => item.lat === e.latLng.lat() && item.lng === e.latLng.lng())[0];
    this.setState({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      activeMarker: 1,
      item,
    });
  }

  render() {
    const {
      activeMarker, result, lat, lng, item,
    } = this.state;
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
          zoom={4}
          center={{
            lat: 56.4637889,
            lng: 84.9504873,
          }}
        >
          {
            result && (
              result.map((item) => (
                <Marker
                  position={{
                    lat: item.lat,
                    lng: item.lng,
                  }}
                  onClick={this.chooseMarker}
                />
              ))
            )
          }
          {
            activeMarker
              && (
              <InfoWindow
                position={{
                  lat,
                  lng,
                }}
                onCloseClick={() => this.setState({ activeMarker: null })}
              >
                <Container>
                  <Item modal item={item} />
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
