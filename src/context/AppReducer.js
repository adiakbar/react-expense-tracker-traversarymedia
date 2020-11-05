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

    default:
      return state
  }
}