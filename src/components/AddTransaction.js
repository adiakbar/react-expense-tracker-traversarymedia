import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const {addTransaction} = useContext(GlobalContext)

  const handleAddTransaction = (e) => {
    e.preventDefault()
    addTransaction({
      id: Math.floor(Math.random() * 10000),
      text, 
      amount: +amount
    })
    setText('')
    setAmount(0)
  }
  
  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={handleAddTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br/>(negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
