export const calculateBalance = (transactions) => {
  let balance = transactions.reduce((total, transaction) => total + transaction.amount, 0)

  let income = transactions.filter(item => item.amount > 0)
                  .reduce((total, item) => total + item.amount, 0)

  let expense = transactions.filter(item => item.amount < 0)
                  .reduce((total, item) => total - item.amount, 0)

  return {balance, income, expense}
} 

export const AppReducer = (state, action) => {
  switch(action.type){
    case "DELETE_TRANSACTION":
      return {
        ...state,
        ...calculateBalance(state.transactions.filter(item => item.id !== action.payload.id)),
        transactions: state.transactions.filter(item => item.id !== action.payload.id)
      }

    case "ADD_TRANSACTION":
      return {
        ...state,
        ...calculateBalance([...state.transactions, action.payload]),
        transactions: [...state.transactions, action.payload]
      }

    default:
      return state
  }
}