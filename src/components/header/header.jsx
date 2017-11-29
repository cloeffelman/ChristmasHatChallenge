import React, {Component} from 'react'

import Contestants from '../contestants/contestants'
import Leaders from '../leaders/leaders'
import {LastYearsWinner} from '../lastYearsWinner/lastYearsWinner'

class Header extends Component{
  compare(a, b){
    if(a.votes == b.votes){
      return 0;
    }
    else{
      return a.votes < b.votes ? -1 : 1;
    }
  }
  sort(contestants){
    return contestants.sort(this.compare);
  }
  render(){
    const {
      contestants,
      lastYearsWinner
    } = this.props
    
    let sortedContenstants = this.sort(contestants).reverse(),
        leaders = sortedContenstants.slice(0, 3),
        remainingContestants = sortedContenstants.slice(3)

    return(
      <div className="header">
        <Leaders leaders={leaders}/>
        <Contestants contestants={remainingContestants}/>
        <LastYearsWinner lastYearsWinner={lastYearsWinner.name}/>
        <div id="snow"/>
      </div>
    )
  }
}

export default Header
