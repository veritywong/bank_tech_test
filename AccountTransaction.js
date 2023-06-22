class AccountTransaction {
  constructor() {
    this.transactions = [];
    this.date = new Date();
  }

  depositMoney(amount) {
    let integerAmount = +amount;

    if (isNaN(integerAmount) || integerAmount === 0) {
      throw new Error("Invalid Input");
    }

    this.transactions.push({
      date: this.generateDate(),
      credit: integerAmount,
      debit: "",
      balance: this.calculateBalance() + integerAmount,
    });

    return this.transactions;
  }

  withdrawMoney(amount) {
    this.transactions.push({
      date: this.generateDate(),
      credit: "",
      debit: +amount,
      balance: this.calculateBalance() - +amount,
    });

    return this.checkBalanceValid();
  }

  calculateBalance() {
    let balance = 0;

    for (let i = 0; i < this.transactions.length; i++) {
      balance += this.transactions[i].credit - this.transactions[i].debit;
    }

    return balance;
  }

  checkBalanceValid() {
    if (this.transactions.slice(-1)[0].balance < 0) {
      throw new Error("Error: Insufficient credit");
    } else {
      return this.transactions;
    }
  }

  generateDate() {
    let formattedDate = `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`;
    return formattedDate;
  }
}

module.exports = AccountTransaction;
