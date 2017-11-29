import React, {Component} from 'react'

class Leaders extends Component{
  render(){
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
    )
  }
}

export default Leaders