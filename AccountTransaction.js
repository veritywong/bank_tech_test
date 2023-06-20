class AccountTransaction {
  constructor() {
    this.transactions = [];
  }

  calculateBalance() {
    let sum = 0;

    for (let i = 0; i < this.transactions.length; i++) {
      sum += this.transactions[i].credit - this.transactions[i].debit;
    }
    return sum;
  }

  depositMoney(date, amount) {
    this.transactions.push({
      date: date,
      credit: +amount,
      debit: "",
      balance: this.calculateBalance() + amount,
    });
  }

  withdrawMoney(date, amount) {
    this.transactions.push({
      date: date,
      credit: "",
      debit: +amount,
      balance: this.calculateBalance() - amount,
    });
  }

  viewTransactions() {
   return this.transactions;
  }
}

module.exports = AccountTransaction;
