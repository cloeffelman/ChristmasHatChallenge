import React from 'react';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import Done from 'material-ui/svg-icons/action/done';
import Face from 'material-ui/svg-icons/action/face';

const faceIconStyles = {
  alignItems: "center",
  color: "white",
  display: "flex",
  height: "150px",
  justifyContent: "center",
  width: "150px"
};

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
  computeTotalVotes: function(){
    var totalVotes = 0;
    for(var i = 0; i < data.contestants.length; i++){
      totalVotes += data.contestants[i].votes;
    }
    return totalVotes;
  },
  render: function() {
    var totalVotes = this.computeTotalVotes();
    var sortedContenstants = this.sort(data.contestants).reverse();
    var leaders = sortedContenstants.slice(0, 3);
    var contestants = sortedContenstants.slice(3);
    return(
      <div className = "header">
        <Title year={data.title[0].year} text={data.title[0].text}></Title>
        <Leaders leaders={leaders}></Leaders>
        <Contestants contestants={contestants}></Contestants>
        <LastYearsWinner></LastYearsWinner>
        <TotalVotes override={data.overrideAutoCalculate} totalVotes = {totalVotes}></TotalVotes>
        <Snow></Snow>
        <Footer></Footer>
      </div>
    );
  }
});

var Title = React.createClass({
  displayName: 'Title',
  render: function() {
    return(
      <div className = "title">
        <h1 className = "text">{this.props.text} | {this.props.year}</h1>
        <Lights></Lights>
      </div>
    );
  }
});

var Footer = React.createClass({
  displayName: 'Footer',
  render: function() {
    return(
      <div className = "footer">
        <div className = "text">
          <p>
            This year's campaign will be open to the entire IS department. For your $1 or 3 cans of food donation, you may choose to participate. Each dollar or 3 cans of food buys you one vote. The 'winner' will get to wear one of the prized 'Christmas Hats' for an entire day.
          </p>
          <hr/>
          <p>
            Cast your votes of $1 or 3 cans of food with any of the following IS Social Committee members: Jeanne Haslag, Brenda Mantooth, Don Martindale, Ryan Silverwood, Stacy Haller, Tiffany Lancaster, Paula Turnbull, and Marjorie Turner
          </p>
        </div>
      </div>
    );
  }
});

var Leaders = React.createClass({
  displayName: 'Leaders',
  componentDidMount: function() {
    setTimeout(function(){
      $(".leaders").addClass("intro");
    }, 250);
  },
  render: function() {
    return(
      <div className = "leaders-wrapper">
        <div className = "leaders">
          <div className = "medals">
            <div className = "medal-wrapper">
              <div className = "medal first">
                <h1 className = "place">1<sup>st</sup></h1>
                  <h1 className = "votes">{this.props.leaders[0].votes}</h1>
              </div>
            </div>
            <div className = "medal-wrapper">
              <div className = "medal second">
                  <h1 className = "place">2<sup>nd</sup></h1>
                    <h1 className = "votes">{this.props.leaders[1].votes}</h1>
              </div>
            </div>
            <div className = "medal-wrapper">
              <div className = "medal third">
                  <h1 className = "place">3<sup>rd</sup></h1>
                    <h1 className = "votes">{this.props.leaders[2].votes}</h1>
              </div>
            </div>
          </div>
          <div className = "names">
            <div className = "name first">
              <h1>{this.props.leaders[0].name}</h1>
            </div>
            <div className = "name second">
              <h1>{this.props.leaders[1].name}</h1>
            </div>
            <div className = "name third">
              <h1>{this.props.leaders[2].name}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Contestants = React.createClass({
  displayName: 'Contestants',
  componentDidMount: function() {
    setTimeout(function(){
      $(".contestants").addClass("intro");
    }, 500);
  },
  getPlaceText: function(place){
    var placeText = place;
    if(place <= 20){
      placeText += "th";
    }
    else{
      if(place.toString().charAt(1) == "1") placeText += "st";
      else if(place.toString().charAt(1) == "2") placeText += "nd";
      else if(place.toString().charAt(1) == "3") placeText += "rd";
      else placeText += "th";
    }
    return placeText;
  },
  render: function() {
    var place = 4;
    var contestantNodes = this.props.contestants.map(function(contestant, i) {
      var placeText = this.getPlaceText(place++);
      return(
        <Contestant key={i} place={placeText} votes={contestant.votes} name={contestant.name}></Contestant>
      )
    }, this);
    return(
      <div className = "contestants-wrapper">
        <div className = "contestants">
          {contestantNodes}
        </div>
      </div>
    );
  }
});

var Contestant = React.createClass({
  displayName: 'Contestant',
  render: function() {
    return(
      <div className = "contestant">
        <div className = "medal">
          <h1 className = "place">{this.props.place}</h1>
          <h1 className = "votes">{this.props.votes}</h1>
        </div>
        <div className = "bar">
          <div className = "name">
            <h1>{this.props.name}</h1>
          </div>
        </div>
      </div>
    );
  }
});

var TotalVotes = React.createClass({
  displayName: 'TotalVotes',
  componentDidMount: function() {
    setTimeout(function(){
      $(".totals").addClass("intro");
    }, 1000);
  },
  render: function() {
    return(
      <div className = "totals">
        <div className = "votes">
          <h1 className = "icon"><Done style={votesIconStyles}/></h1>
          <h1 className = "value">{this.props.totalVotes}</h1>
        </div>
        <div className = "money">
          <h1 className = "icon"><AttachMoney style={moneyIconStyles}/></h1>
          <h1 className = "value">{this.props.totalVotes}</h1>
        </div>
      </div>
    );
  }
});

var LastYearsWinner = React.createClass({
  displayName: 'LastYearsWinner',
  render: function() {
    return(
      <div className = "last-years-winner-wrapper">
        <div className = "last-years-winner">
          <h1 className = "title">Last Years Winner</h1>
          <div className = "image">
            <img src=""/>
            <Face style={faceIconStyles}/>
          </div>
          <h1 className = "name">Mike Griffith</h1>
        </div>
      </div>
    );
  }
});

var Lights = React.createClass({
  displayName: 'Lights',
  render: function() {
    var lights = [];
    var numberOfLights = 18;
    for (var i = 0; i < numberOfLights; i++) {
      lights.push(<li key={i}></li>);
    }
    return(
      <ul className = "lights">
        {lights}
      </ul>
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
