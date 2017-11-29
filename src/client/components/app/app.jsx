import React, {Component} from 'react'
import axios from 'axios'

import Header from '../header/header'
import {TitleBar} from '../titleBar/titleBar'
import {Footer} from '../footer/footer'
import {snow} from '../../effects/snow'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: null
    }
  }
  componentDidMount(){
    axios.get('/assets/data/data.json')
      .then(res => {
        console.log(res.data)
        this.setState({data: res.data})
      })
  }
  componentDidUpdate(){
    particlesJS('snow', snow)
  }
  render(){
    const {data} = this.state

    if(!data){ 
      return null
    }
    else{
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
}

export default App
