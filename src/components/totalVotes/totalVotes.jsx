import React, {Component} from 'react'

class TotalVotes extends Component{
  render(){
    var totalVotes = this.props.totalVotes
    var totalMoney = this.props.totalVotes
    if(this.props.override == true){
      totalVotes = this.props.overrideTotalVotes
      totalMoney = this.props.overrideTotalMoney
    }
    return(
      <div className = "totals">
        <div className = "votes">
          <h1 className = "value">{totalVotes}</h1>
          <h1 className = "icon"></h1>
        </div>
        <div className = "money">
          <h1 className = "icon"></h1>
          <h1 className = "value">{totalMoney}</h1>
        </div>
      </div>
    )
  }
}

export default TotalVotes