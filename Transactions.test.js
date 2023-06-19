const Transactions = require('./Transactions');

describe('Transactions', () => {

    let transaction;
    
    beforeEach(() => {
        transaction = new Transactions();
    });

    it('returns an empty array when no deposit transacionts added and viewDeposits called', () => {
        expect(transaction.viewDeposits()).toEqual([]);
    })

    it('returns an empty array when no withrdrawals logged and viewWithdrawals called', () => {
        expect(transaction.viewWithdrawals()).toEqual([]);
    })

    it('returns an object with date and amount', () => {
        result = transaction.depositMoney('10/01/2023', '1000');
        expect(transaction.viewDeposits()).toEqual([{date: '10/01/2023', credit: 1000}])
    })
  
    it('returns a second object with date and amount when another transaction logged', () => {
        transaction.depositMoney('10/01/2023', '1000');
        result = transaction.depositMoney('13/01/2023', '2000');
        expect(transaction.viewDeposits()[1]).toEqual({date: '13/01/2023', credit: 2000})
    })
    
    it('returns an object with date and amount when withrdrawal logged', () => {
       result = transaction.withdrawMoney('14/01/2023', '500');
       expect(transaction.viewWithdrawals()).toEqual([{date: '14/01/2023', debit: 500}])
    })

    it('displays the balance by detracting debit from credit', () => {
        transaction.depositMoney('10/01/2023', '1000');
        transaction.depositMoney('13/01/2023', '2000');
        transaction.calculateBalance();
        expect(transaction.viewBalance()).toEqual([3000]);
    })
   
    it('displays the balance by detracting debit from credit', () => {
        transaction.depositMoney('10/01/2023', '1000');
        transaction.depositMoney('13/01/2023', '2000');
        transaction.withdrawMoney('14/01/2023', '500');
        transaction.calculateBalance();
        expect(transaction.viewBalance()).toEqual([2500]);
    })
    
    it('displays the balance by detracting debit from credit', () => {
        transaction.depositMoney('10/01/2023', '1000');
        transaction.calculateBalance();
        transaction.depositMoney('13/01/2023', '2000');
        transaction.calculateBalance();
        transaction.withdrawMoney('14/01/2023', '500');
        transaction.calculateBalance();
        expect(transaction.viewBalance()).toEqual([1000, 3000, 2500]);
    })

    
})