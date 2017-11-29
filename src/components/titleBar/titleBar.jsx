import React from 'react'
import TotalVotes from '../totalVotes/totalVotes'
import Lights from '../lights/lights'

const TitleBar = ({title, contestants, totals}) => (
  <div className = "title-bar">
    <h1 className = "text">
      <span className = "year">{title.year}</span>{title.text}
    </h1>
    <TotalVotes 
      override={totals.overrideAutoCalculate} 
      totalVotes={computeTotalVotes(contestants)} 
      overrideTotalVotes={totals.votes} 
      overrideTotalMoney={totals.money}
    />
    <Lights/>
  </div>
)

const computeTotalVotes = contestants => {
  let totalVotes = 0
  for(var i = 0; i < contestants.length; i++){
    totalVotes += contestants[i].votes
  }
  return totalVotes
}

export {TitleBar}