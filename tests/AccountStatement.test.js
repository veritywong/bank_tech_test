const AccountStatement = require("../AccountStatement");

describe("AccountStatement", () => {
  it("returns an array of transactions including balance", () => {
    const fakeTransactions = [
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

    const statement = new AccountStatement(fakeTransactions);
    expect(statement.displayStatement()).toEqual([
      "14/01/2023 ||  || 500.00 || 2500.00",
      "13/01/2023 || 2000.00 ||  || 3000.00",
      "10/01/2023 || 1000.00 ||  || 1000.00",
    ]);
  });
});
