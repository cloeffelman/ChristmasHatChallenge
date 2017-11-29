import React, {Component} from 'react'

class Lights extends Component{
  render() {
    let lights = [],
      numberOfLights = 40
    for(let i = 0; i < numberOfLights; i++){
      lights.push(<li key={i}/>)
    }
    return(
      <ul className = "lights">
          {lights}
      </ul>
    )
  }
}
  
export default Lights