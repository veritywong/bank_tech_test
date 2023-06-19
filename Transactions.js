class Transactions {
    constructor() {
        this.deposits = [];
        this.withdrawals = [];
        this.balance = [];

    }

    viewDeposits() {
        return this.deposits;
    }

    viewWithdrawals() {
        return this.withdrawals;
    }

    viewBalance() {
        return this.balance;
    }

    calculateBalance() {
        let sum = 0;

        for (let i = 0; i < this.deposits.length; i++) {
        sum += this.deposits[i].credit;
        }
        for (let j = 0; j < this.withdrawals.length; j++) {
        sum -= this.withdrawals[j].debit;
        }
        this.balance.push(sum)
    }

    depositMoney(date, credit) {
        this.credit = +credit
        this.deposits.push({date: date, credit: this.credit});

    }

    withdrawMoney(date, debit) {
        this.debit = +debit
        this.withdrawals.push({date: date, debit: this.debit});

    }

}

module.exports = Transactions