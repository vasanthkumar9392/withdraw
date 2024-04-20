import './index.css'

const DenominationItem = props => {
  const {denominationList, withdrawAmount} = props
  const {value} = denominationList

  const withDraw = () => {
    withdrawAmount(value)
  }
  return (
    <li className="list">
      <button className="button" type="button" onClick={withDraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
