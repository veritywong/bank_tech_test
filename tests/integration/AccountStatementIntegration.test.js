const AccountStatement = require("../../AccountStatement");
const AccountTransaction = require("../../AccountTransaction");

describe("AccountStatement", () => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2023, 5, 20));

  it("returns an array of transactions including balance", () => {
    const account = new AccountTransaction();
    const transactions = account.depositMoney(1000.0);

    const statement = new AccountStatement(transactions);
    expect(statement.displayStatement()).toEqual([
      "20/5/2023 || 1000.00 ||  || 1000.00",
    ]);
  });
});
