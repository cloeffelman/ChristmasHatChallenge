import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-flexbox-grid';

import Header from './header'

var Application = React.createClass({
  displayName: 'Application',
  render: function() {
    return(
      <MuiThemeProvider>
        <div className = "content">
          <Header/>
          <Grid className = "grid">
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
});

module.exports = Application
