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
        <TotalVotes override={data.overrideAutoCalculate} totalVotes = {totalVotes}></TotalVotes>
        <Ground></Ground>
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
        <h1 className = "year">{this.props.year}</h1>
        <hr/>
        <h1 className = "text">{this.props.text}</h1>
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
  render: function() {
    return(
      <div className = "leaders">
        <div className = "medals">
          <div className = "medal-wrapper">
            <div className = "medal first">
              <h1 className = "place">1</h1>
                <h1 className = "votes">{this.props.leaders[0].votes}</h1>
            </div>
          </div>
          <div className = "medal-wrapper">
            <div className = "medal second">
                <h1 className = "place">2</h1>
                  <h1 className = "votes">{this.props.leaders[1].votes}</h1>
            </div>
          </div>
          <div className = "medal-wrapper">
            <div className = "medal third">
                <h1 className = "place">3</h1>
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
    );
  }
});

var Contestants = React.createClass({
  displayName: 'Contestants',
  render: function() {
    var place = 4;
    var contestantNodes = this.props.contestants.map(function(contestant, i) {
      return(
        <div key={i} className = "contestant">
          <div className = "medal">
            <h1 className = "place">{place++}</h1>
            <h1 className = "votes">{contestant.votes}</h1>
          </div>
          <div className = "bar">
            <div className = "name">
              <h1>{contestant.name}</h1>
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
      <div className = "last-years-winner">
        <h1>Last Years Winner</h1>
        <img src=""/>
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
