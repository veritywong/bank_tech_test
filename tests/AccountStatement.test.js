const AccountStatement = require("../AccountStatement");

describe("AccountStatement", () => {
  let statement;
  let fakeTransactions;

  beforeEach(() => {
    fakeTransactions = [
      {
        date: "10/01/2023",
        credit: 1000,
        debit: "",
        balance: 1000,
      },
      {
        date: "13/01/2023",
        credit: 2000,
        debit: "",
        balance: 3000,
      },
      {
        date: "14/01/2023",
        credit: "",
        debit: 500,
        balance: 2500,
      },
    ];

    statement = new AccountStatement(fakeTransactions);
  });

  it("formats the transactions", () => {
    expect(statement.formatStatement()).toEqual([
      "14/01/2023 ||  || 500.00 || 2500.00",
      "13/01/2023 || 2000.00 ||  || 3000.00",
      "10/01/2023 || 1000.00 ||  || 1000.00",
    ]);
  });

  it("logs the formatted statement onto the console", () => {
    const logSpy = jest.spyOn(global.console, "log");
    statement.displayStatement();

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith("date || credit || debit || balance");
    expect(logSpy).toHaveBeenCalledWith(
      "14/01/2023 ||  || 500.00 || 2500.00\n13/01/2023 || 2000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00"
    );
  });
});
