const BankAccount = require('./BankAccount');

describe('BankAccount', () => {

    let account;
    
    beforeEach(() => {
        account = new BankAccount();
    });

    it('returns an empty array when no deposit transactions added and viewDeposits called', () => {
        expect(account.viewTransactions()).toEqual([]);
    })

    it('displays transaction information including date, credit, debit and balance', () => {
        account.depositMoney('10/01/2023', 1000.00);
        result = account.viewTransactions()
        console.log(result)
        expect(result).toEqual(['10/01/2023 || 1000.00 ||  || 1000.00'])
    })
  
   it('returns a second object with date and amount when another transaction logged', () => {
        account.depositMoney('10/01/2023', 1000.00);
        account.depositMoney('13/01/2023', 2000.00);
        expect(account.viewTransactions()).toEqual(['13/01/2023 || 2000.00 ||  || 3000.00', '10/01/2023 || 1000.00 ||  || 1000.00'])
    })
    
    it('returns an array of transactions including balance', () => {
        account.depositMoney('10/01/2023', 1000.00);
        account.depositMoney('13/01/2023', 2000.00);
        account.withdrawMoney('14/01/2023', 500.00);
       expect(account.viewTransactions()).toEqual(['14/01/2023 ||  || 500.00 || 2500.00', '13/01/2023 || 2000.00 ||  || 3000.00', '10/01/2023 || 1000.00 ||  || 1000.00'])
    })
// figure out how to test console.log in JS
    
})