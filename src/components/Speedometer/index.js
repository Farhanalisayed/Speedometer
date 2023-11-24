// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  acceleration = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
    })
  }

  brake = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
    })
  }
  render() {
    let {speed} = this.state

    return (
      <div className="the-container">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para">
          Speed is <span className="speed">{speed}</span>mph
        </h1>
        <p className="note">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-cont">
          <button className="accelerating" onClick={this.acceleration}>
            Accelerate
          </button>
          <button className="braking" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
