import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid } from 'react-flexbox-grid'

import Header from './header'

var Application = React.createClass({
  displayName: 'Application',
  getInitialState: function() {
    return {
      data: []
    }
  },
  componentDidMount: function() {
    this.setState({data: window.data})
    particlesJS('snow', {
      particles: {
        number: {
          value: 300
        },
        size: {
          value: 5,
          random: true,
        },
        opacity: {
          random: true
        },
        move: {
          direction: 'bottom'
        },
        line_linked: {
          enable: false
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'bubble'
          }
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          },
          bubble: {
            distance: 100,
            size: 10
          }
        }
      }
    })
  },
  render: function() {
    return(
      <MuiThemeProvider>
        <div className = "content-wrapper">
          <div id="snow"/>
          <Header contestants={this.state.data.contestants} title={this.state.data.title} totals={this.state.data.totals}/>
          <Grid className = "grid"/>
        </div>
      </MuiThemeProvider>
    );
  }
});

module.exports = Application
