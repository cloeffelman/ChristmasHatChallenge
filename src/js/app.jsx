import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-flexbox-grid';

import Header from './header'

var Application = React.createClass({
  displayName: 'Application',
  getInitialState: function() {
    return {
      data: []
    }
  },
  componentDidMount: function() {
    this.setState({data: window.data});
  },
  render: function() {
    return(
      <MuiThemeProvider>
        <div className = "content-wrapper">
          <Snow></Snow>
          <Header contestants={this.state.data.contestants} title={this.state.data.title} totals={this.state.data.totals}/>
          <Grid className = "grid">
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
});

var Snow = React.createClass({
  displayName: 'Header',
  render: function() {
    return(
      <canvas id = "snow"></canvas>
    );
  }
});

export default Application
