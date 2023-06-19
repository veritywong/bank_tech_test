class BankAccount {
    constructor() {
        this.transactions = [];

    }

    calculateBalance() {
        let sum = 0;

        for (let i = 0; i < this.transactions.length; i++) {
        sum += this.transactions[i].credit - this.transactions[i].debit;
        }
        return sum
    }

    depositMoney(date, credit) {
        this.transactions.push({
            date: date, 
            credit: credit,
            debit: '',
            balance: this.calculateBalance() + credit
        });

    }

    withdrawMoney(date, debit) {
        this.transactions.push({
            date: date, 
            credit: '',
            debit: debit,
            balance: this.calculateBalance() - debit

        });
    }

    viewTransactions() {
        console.log('date || credit || debit || balance')
        return this.transactions.reverse().map((transaction) => {
            const formattedCredit = typeof transaction.credit === 'number' ? transaction.credit.toFixed(2) : '';
            const formattedDebit = typeof transaction.debit === 'number' ? transaction.debit.toFixed(2) : '';
            const formattedBalance = transaction.balance.toFixed(2);
            console.log(`${transaction.date} || ${formattedCredit} || ${formattedDebit} || ${formattedBalance}`)
            return `${transaction.date} || ${formattedCredit} || ${formattedDebit} || ${formattedBalance}`
        })
        
    }

}

module.exports = BankAccount