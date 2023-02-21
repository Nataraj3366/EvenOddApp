import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {counter: 0, status: 'Even'}

  getCounterNumber = () => {
    const {counter} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({counter: prevState.counter + randomNumber}))
    const getNum = counter + randomNumber
    if (getNum % 2 === 0) {
      console.log(counter)
      this.setState({status: 'Even'})
    } else {
      this.setState({status: 'Odd'})
    }
  }

  render() {
    const {counter, status} = this.state
    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Count {counter}</h1>
          <p className="status">Count is {status}</p>
          <button
            type="button"
            className="button"
            onClick={this.getCounterNumber}
          >
            Increment
          </button>
          <p className="text">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
