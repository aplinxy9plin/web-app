import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

// components
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import Sidebar from '../../components/Sidebar/Sidebar';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const myHeaders = new Headers();
    myHeaders.append('Token', 'AqgeOIM0Hbbm99KLKcdUzyh0TIifgQgbVK4dHbOZm4jiaS_--IrK-vkXHZTDW6Tj6k-brynmTQhjUFVk1UkSGQK9Tsutu9aH-r_s_sSn5h9-jT3KLRQtUeT5HVyXVdYP6ProNPKiEMzeBo_t87Bqf2jk_Tl4sS902qANfI2TlR3qaOqT6y6KgzPIv8kc');
    myHeaders.append('UserToken', localStorage.getItem('grofor_token'));

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://cf931bb1.ngrok.io/get_label', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }


  render() {
    return (
      <Grid style={{ height: 'calc(100vh - 50px)' }} fluid>
        <Grid.Row>
          <Grid.Column width={4} style={{ padding: 0 }}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12} style={{ padding: 0 }}>
            <GoogleMap />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Map;
