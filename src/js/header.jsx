import React from 'react';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import Done from 'material-ui/svg-icons/action/done';

const moneyIconStyles = {
  alignItems: "center",
  color: "rgb(71, 209, 71)",
  display: "flex",
  height: "30px",
  justifyContent: "center",
  width: "30px"
};

const votesIconStyles = {
  alignItems: "center",
  color: "rgb(255, 51, 51)",
  display: "flex",
  height: "30px",
  justifyContent: "center",
  width: "30px"
};

var Header = React.createClass({
  displayName: 'Header',
  render: function() {
    return(
      <div className = "header">
        <Title></Title>
        <Leaders></Leaders>
        <Contestants></Contestants>
        <TotalVotes></TotalVotes>
        <Ground></Ground>
        <Snow></Snow>
      </div>
    );
  }
});

var Title = React.createClass({
  displayName: 'Title',
  render: function() {
    return(
      <div className = "title">
        <h1 className = "year">2016</h1>
        <hr/>
        <h1 className = "text">Holiday Hat Challenge</h1>
      </div>
    );
  }
});

var Leaders = React.createClass({
  displayName: 'Leaders',
  render: function() {
    return(
      <div className = "leaders">
        <div className = "medals">
          <div className = "medal first">
            <h1>1</h1>
          </div>
          <div className = "medal second">
            <h1>2</h1>
          </div>
          <div className = "medal third">
            <h1>3</h1>
          </div>
        </div>
        <div className = "names">
          <div className = "name first">
            <h1>Caleb Schmitt</h1>
          </div>
          <div className = "name second">
            <h1>Keith Roth</h1>
          </div>
          <div className = "name third">
            <h1>Sean Huggans</h1>
          </div>
        </div>
      </div>
    );
  }
});

var Contestants = React.createClass({
  displayName: 'Contestants',
  render: function() {
    var data = {
      "contestants":[
        {
          "firstName":  "John",
          "lastName":   "Doe",
          "votes":      "123"
        },
        {
          "firstName":  "Anna",
          "lastName":   "Smith",
          "votes":      "234"
        },
        {
          "firstName":  "Peter",
          "lastName":   "Jones",
          "votes":      "345"
        }
      ]
    };
    var contestantNodes = data.contestants.map(function(contestant, i) {
      return(                                                                                                     
        <div key={i} className = "contestant">
          <div className = "name">
            <h1>{contestant.firstName}</h1>
            <h1>{contestant.lastName}</h1>
          </div>
          <div className = "votes">
            {contestant.votes}
          </div>
        </div>
      )
    });
    return(
      <div className = "contestants">
        {contestantNodes}
      </div>
    );
  }
});

var TotalVotes = React.createClass({
  displayName: 'TotalVotes',
  render: function() {
    return(
      <div className = "totals">
        <div className = "votes">
          <h1 className = "icon"><Done style={votesIconStyles}/></h1>
          <h1 className = "value">621</h1>
        </div>
        <div className = "money">
          <h1 className = "icon"><AttachMoney style={moneyIconStyles}/></h1>
          <h1 className = "value">621</h1>
        </div>
      </div>
    );
  }
});

var Ground = React.createClass({
  displayName: 'Ground',
  render: function() {
    return(
      <div className = "ground"></div>
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

module.exports = Header
