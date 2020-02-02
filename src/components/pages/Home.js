import React, {Component} from 'react'
import Clock from '../subcomponents/Clock'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to the RapidFIRE Retirement Utility</h1>
        <h3>Plan for a better future</h3>
        <p>
        FIRE stands for Financial Independence / Retire Early, which is the concept of not having to work for money such as through passive income, and achieving that state at an earlier age than typical retirement.
        </p>
        {/*<p></p>*/}
        <p>Hopefully using this tool will help on your journey to the life you want.</p>
      </div>
    )
  }
}

export default Home
