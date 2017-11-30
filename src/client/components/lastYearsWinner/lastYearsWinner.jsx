import React from 'react'

const LastYearsWinner = ({lastYearsWinner}) => (
  <div className = "last-years-winner-wrapper">
    <div className = "last-years-winner">
    <h1 className = "title">Last Years Winner!</h1>
    <div className = "image">
      <img src="/img/last_years_winner.jpg"/>
    </div>
    <h1 className = "name">{lastYearsWinner}</h1>
    </div>
  </div>
)

export {LastYearsWinner}