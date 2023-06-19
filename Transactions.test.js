const Transactions = require('./Transactions');

describe('Transactions', () => {
    it('returns an empty array when no deposit transacionts added', () => {
        result = new Transactions();
        expect(result.viewDeposits()).toEqual([]);
    })
})