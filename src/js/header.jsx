import React from 'react';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import Done from 'material-ui/svg-icons/action/done';
import Face from 'material-ui/svg-icons/action/face';

const faceIconStyles = {
  alignItems: "center",
  color: "rgb(51, 173, 255)",
  display: "flex",
  height: "80px",
  justifyContent: "center",
  width: "80px"
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
  border: "2px solid rgb(0, 102, 204)",
  borderRadius: "50%",
  color: "rgb(0, 102, 204)",
  display: "flex",
  height: "26px",
  padding: "2px",
  justifyContent: "center",
  width: "26px"
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
      <div className = "content">
        <div className = "header">
          <Title year={data.title[0].year} text={data.title[0].text}></Title>
          <Leaders leaders={leaders}></Leaders>
          <Contestants contestants={contestants}></Contestants>
          <LastYearsWinner lastYearsWinner={data.lastYearsWinner[0].name}></LastYearsWinner>
          <TotalVotes override={data.totals[0].overrideAutoCalculate} totalVotes = {totalVotes} overrideTotalVotes = {data.totals[0].votes} overrideTotalMoney = {data.totals[0].money}></TotalVotes>
        </div>
        <Footer upperText={data.footerText[0].upperText} lowerText={data.footerText[0].lowerText}></Footer>
      </div>
    );
  }
});

var Title = React.createClass({
  displayName: 'Title',
  render: function() {
    return(
      <div className = "title">
        <h1 className = "text"><span className = "year">{this.props.year}</span>{this.props.text}</h1>
        <Lights></Lights>
      </div>
    );
  }
});

var Footer = React.createClass({
  displayName: 'Footer',
  render: function() {
    return(
      <div className = "footer-wrapper">
        <Santa></Santa>
        <div className = "footer">
          <div className = "text">
            <p>
              {this.props.upperText}
            </p>
            <hr/>
            <p>
              {this.props.lowerText}
            </p>
          </div>
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
  render: function() {
    var totalVotes = this.props.totalVotes;
    var totalMoney = this.props.totalVotes;
    if(this.props.override == true){
      totalVotes = this.props.overrideTotalVotes;
      totalMoney = this.props.overrideTotalMoney;
    }
    return(
      <div className = "totals">
        <div className = "votes">
          <h1 className = "value">{totalVotes}</h1>
          <h1 className = "icon"><Done style={votesIconStyles}/></h1>
        </div>
        <div className = "money">
          <h1 className = "icon"><AttachMoney style={moneyIconStyles}/></h1>
          <h1 className = "value">{totalMoney}</h1>
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
          <h1 className = "title">Last Years Winner!</h1>
          <div className = "image">
            <img src="last_years_winner.jpg"/>
            <Face style={faceIconStyles}/>
          </div>
          <h1 className = "name">{this.props.lastYearsWinner}</h1>
        </div>
      </div>
    );
  }
});

var Lights = React.createClass({
  displayName: 'Lights',
  render: function() {
    var lights = [];
    var numberOfLights = 40;
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

var Santa = React.createClass({
  displayName: 'Santa',
  render: function() {
    return(
      <div className="santa-wrapper">
        <div className="santa">
    	     <div className="head">
    				<div className="face">
    					<div className="redhat">
    						<div className="whitepart"></div>
    						<div className="redpart"></div>
    						<div className="hatball"></div>
    					</div>
    					<div className="eyes"></div>
    					<div className="beard">
    						<div className="nouse"></div>
    						<div className="mouth"></div>
    					</div>
    				</div>
    				<div className="ears"></div>
			     </div>
			     <div className="body"></div>
		    </div>
      </div>
    );
  }
});

module.exports = Header
