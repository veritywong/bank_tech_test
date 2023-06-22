class AccountStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  formatCredit(credit) {
    return typeof credit === "number" ? credit.toFixed(2) : "";
  }

  formatDebit(debit) {
    return typeof debit === "number" ? debit.toFixed(2) : "";
  }

  formatStatement() {
    return this.transactions.reverse().map((transaction) => {
      const credit = this.formatCredit(transaction.credit);
      const debit = this.formatDebit(transaction.debit);
      const balance = transaction.balance.toFixed(2);
      const formattedValues = `${transaction.date} || ${credit} || ${debit} || ${balance}`;
      
      return formattedValues;
    });
  }

  displayStatement() {
    console.log("date || credit || debit || balance");
    console.log(this.formatStatement().join("\n"));
  }
}

module.exports = AccountStatement;
