import React, {Component} from 'react'

import Contestants from '../contestants/contestants'
import Leaders from '../leaders/leaders'
import TotalVotes from '../totalVotes/totalVotes'
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
  computeTotalVotes(){
    const {contestants} = this.props
    let totalVotes = 0
    for(var i = 0; i < contestants.length; i++){
      totalVotes += contestants[i].votes
    }
    return totalVotes
  }
  render(){
    const {
      contestants,
      totals,
      lastYearsWinner
    } = this.props,
          totalVotes = this.computeTotalVotes()
    let sortedContenstants = this.sort(contestants).reverse(),
        leaders = sortedContenstants.slice(0, 3),
        remainingContestants = sortedContenstants.slice(3)

    return(
      <div className="header">
        <Leaders leaders={leaders}/>
        <Contestants contestants={remainingContestants}/>
        <LastYearsWinner lastYearsWinner={lastYearsWinner.name}/>
        <TotalVotes 
          override={totals.overrideAutoCalculate} 
          totalVotes={totalVotes} 
          overrideTotalVotes={totals.votes} 
          overrideTotalMoney={totals.money}
        />
        <div id="snow"/>
      </div>
    )
  }
}

export default Header
