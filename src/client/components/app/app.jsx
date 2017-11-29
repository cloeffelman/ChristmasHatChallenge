import React, {Component} from 'react'

import {TitleBar} from '../titleBar/titleBar'
import Header from '../header/header'
import {Footer} from '../footer/footer'

import {initialData} from '../../assets/data/data'
import {snow} from '../../effects/snow'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: initialData
    }
  }
  componentDidMount(){
    particlesJS('snow', snow)
  }
  render(){
    const {data} = this.state

    return(
      <div className="content-wrapper">
        <div className="content">
          <TitleBar 
            title={data.title} 
            contestants={data.contestants}
            totals={data.totals}
          />
          <Header 
            contestants={data.contestants}
            lastYearsWinner={data.lastYearsWinner}
          />
          <Footer 
            upperText={data.footerText.upper} 
            lowerText={data.footerText.lower}
          />
        </div>
      </div>
    )
  }
}

export default App
