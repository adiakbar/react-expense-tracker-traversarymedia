export const calculateBalance = (transactions) => {
  let balance = transactions.reduce((total, transaction) => total + transaction.amount, 0)

  return balance
} 

export const AppReducer = (state, action) => {
  switch(action.type){

    default:
      return state
  }
}