class AccountStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  viewStatement() {
    console.log("date || credit || debit || balance");
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
      console.log(
        `${transaction.date} || ${formattedCredit} || ${formattedDebit} || ${formattedBalance}`
      );
      return `${transaction.date} || ${formattedCredit} || ${formattedDebit} || ${formattedBalance}`;
    });
  }
}

module.exports = AccountStatement;