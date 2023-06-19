class Transactions {
    constructor() {
        this.deposits = [];
        this.withdrawals = [];

    }

    viewDeposits() {
        return this.deposits;
    }

    viewWithdrawals() {
        return this.withdrawals;
    }

    depositMoney(date, amount) {
        this.deposits.push({date: date, credit: +amount});

    }

    withdrawMoney(date, amount) {
        this.withdrawals.push({date: date, debit: +amount});

    }
}

module.exports = Transactions