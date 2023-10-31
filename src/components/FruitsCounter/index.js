import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="mainHome">
        <div className="home">
          <div className="innerBox">
            <div className="centerColumn">
              <div className="box">
                <h1>
                  Bob ate <span className="key1">{key1}</span> mangoes{' '}
                  <span className="key2">{key2}</span> bananas
                </h1>
                <div className="twoFruitDiv">
                  <div className="fruitCont">
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                        alt="mango"
                        height="300"
                        width="300"
                      />
                      <div>
                        <button onClick={this.onIncrementMango} type="submit">
                          Eat Mango
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="fruitCont">
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                        alt="banana"
                        height="300"
                        width="300"
                      />
                      <div>
                        <button onClick={this.onIncrementBanana} type="submit">
                          Eat Banana
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
