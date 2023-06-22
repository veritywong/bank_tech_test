const AccountStatement = require("../../AccountStatement");
const AccountTransaction = require("../../AccountTransaction");

describe("AccountStatement", () => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2023, 5, 20));

  let account;
  let transactions;
  let statement;

  beforeEach(() => {
    account = new AccountTransaction();
    transactions = account.depositMoney(1000);
    statement = new AccountStatement(transactions);
  });

  it("returns an array of transactions including balance", () => {
    expect(statement.formatStatement()).toEqual([
      "20/5/2023 || 1000.00 ||  || 1000.00"
    ]);
  });

  it("console.logs the statement", () => {
    const logSpy = jest.spyOn(global.console, "log");
    statement.displayStatement();

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith("date || credit || debit || balance");
    expect(logSpy).toHaveBeenCalledWith("20/5/2023 || 1000.00 ||  || 1000.00");
  });
});
