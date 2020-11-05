import React, {createContext, useReducer} from 'react'
import { AppReducer, calculateBalance } from './AppReducer'

const transactions = [
  {id: 1, text: 'Flower', amount: -20},
  {id: 2, text: 'Salary', amount: 300},
  {id: 3, text: 'Book', amount: -10},
  {id: 4, text: 'Camera', amount: 150}
]

const initialState = {
  transactions,
  ...calculateBalance(transactions)
}

export const GlobalContext = createContext()

const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const contextValue = {
    ...state
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider