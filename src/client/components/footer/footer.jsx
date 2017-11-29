import React from 'react'

import {Santa} from '../santa/santa'

const Footer = ({upperText, lowerText}) => (
  <div className = "footer-wrapper">
    <Santa/>
    <div className = "footer">
    <div className = "text">
      <p>{upperText}</p>
      <hr/>
      <p>{lowerText}</p>
    </div>
    </div>
  </div>
)
  
export {Footer}