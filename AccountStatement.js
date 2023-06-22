class AccountStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  formatStatement() {
   
    return this.transactions.reverse().map((transaction) => {
      const formattedCredit =
        typeof transaction.credit === "number"
          ? transaction.credit.toFixed(2)
          : "";
      const formattedDebit =
        typeof transaction.debit === "number"
          ? transaction.debit.toFixed(2)
          : "";
      const formattedBalance = transaction.balance.toFixed(2);

      const formattedStatement = `${transaction.date} || ${formattedCredit} || ${formattedDebit} || ${formattedBalance}`;
      
      console.log(formattedStatement)
      return formattedStatement;
    });
  }

  displayStatement() {

    console.log("date || credit || debit || balance");
    return this.formatStatement()
  }
}

module.exports = AccountStatement;