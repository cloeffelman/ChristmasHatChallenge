import React, {Component} from 'react'

class Contestants extends Component{
  componentDidMount() {
    setTimeout(function(){
      $(".contestants").addClass("intro");
    }, 500);
  }
  getPlaceText(place){
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
  }
  render() {
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
    )
  }
}

class Contestant extends Component{
  render(){
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
    )
  }
}

export default Contestants