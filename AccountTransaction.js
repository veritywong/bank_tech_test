class AccountTransaction {
  constructor() {
    this.transactions = [];
    this.date = new Date;
  }

  calculateBalance() {
    let sum = 0;

    for (let i = 0; i < this.transactions.length; i++) {
      sum += this.transactions[i].credit - this.transactions[i].debit;
    }
    
    return sum;
    
  }


  depositMoney(amount) {
    this.transactions.push({
      date: this.generateDate(),
      credit: +amount,
      debit: "",
      balance: this.calculateBalance() + +amount,
    });

    return this.transactions
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

  checkBalanceValid() {
    if (this.transactions.slice(-1)[0].balance < 0) {
      throw new Error('Error: Insufficient credit')
    } else {
      return this.transactions
    }
  }


  generateDate() {
    let formattedDate = `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`
    return formattedDate
  }
}

module.exports = AccountTransaction;
