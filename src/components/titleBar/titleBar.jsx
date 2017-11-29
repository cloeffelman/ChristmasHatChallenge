import React from 'react'
import Lights from '../lights/lights'

const TitleBar = ({title}) => (
  <div className = "title">
    <h1 className = "text">
      <span className = "year">{title.year}</span>{title.text}
    </h1>
    <Lights/>
  </div>
)

export {TitleBar}