import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdrawAmount = value => {
    this.setState(prevstate => ({amount: prevstate.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="name-container">
            <div className="name-char-container">
              <h1 className="name-charecter">s</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="main-amount-container">
            <p className="your-balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="amount-para">In Rupees</p>
            </div>
          </div>
          <p className="Withdraw-heading">Withdraw</p>
          <p className="Withdraw-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachList => (
              <DenominationItem
                denominationList={eachList}
                key={eachList.id}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
