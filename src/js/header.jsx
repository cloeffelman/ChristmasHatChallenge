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
  compare: function(a, b){
    if(a.votes == b.votes){
      return 0;
    }
    else{
      return a.votes < b.votes ? -1 : 1;
    }
  },
  sort: function(contestants){
    return contestants.sort(this.compare);
  },
  render: function() {
    var data = {
      "contestants":[
        {
          "firstName":  "John",
          "lastName":   "Doe",
          "votes":      123
        },
        {
          "firstName":  "Cory",
          "lastName":   "Loeffelman",
          "votes":      234
        },
        {
          "firstName":  "sdfsdf",
          "lastName":   "wefwf",
          "votes":      345
        },
        {
          "firstName":  "rtert",
          "lastName":   "fdfgdfg",
          "votes":      624
        },
        {
          "firstName":  "tyjtyj",
          "lastName":   "zxczxczxc",
          "votes":      284
        },
        {
          "firstName":  "sdffef",
          "lastName":   "sdf",
          "votes":      291
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        },
        {
          "firstName":  "kuiku",
          "lastName":   "yyjyj",
          "votes":      163
        }
      ]
    };
    var sortedContenstants = this.sort(data.contestants).reverse();
    var place = 4;
    var contestantNodes = sortedContenstants.map(function(contestant, i) {
      return(
        <div key={i} className = "contestant">
          <h1 className = "place">{place++}</h1>
          <div className = "bar">
            <div className = "name">
              <h1>{contestant.firstName} {contestant.lastName}</h1>
            </div>
            <div className = "votes">
              <h1>{contestant.votes}</h1>
            </div>
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
