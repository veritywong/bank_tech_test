const AccountStatement = require("../../AccountStatement");
const AccountTransaction = require("../../AccountTransaction");

describe("AccountStatement", () => {
  it("returns an array of transactions including balance", () => {
    const account = new AccountTransaction();
    account.depositMoney("10/01/2023", 1000.0);
    const transactions = account.viewTransactions();

    const statement = new AccountStatement(transactions);
    expect(statement.viewStatement()).toEqual([
      "10/01/2023 || 1000.00 ||  || 1000.00",
    ]);
  });
});
