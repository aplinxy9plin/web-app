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
