// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head">
            Bob ate <span className="span">{mango}</span> mangoes
            <span className="span">{banana}</span> bananas
          </h1>

          <div className="image-btn-container">
            <div className="fruit-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" className="pri-btn" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="pri-btn"
                onClick={this.eatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
