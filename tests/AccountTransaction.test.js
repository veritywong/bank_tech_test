const AccountTransaction = require("../AccountTransaction");

describe("AccountTransaction", () => {
  let account;

  beforeEach(() => {
    account = new AccountTransaction();
  });

  it("returns an empty array when no deposit transactions added and viewDeposits called", () => {
    expect(account.viewTransactions()).toEqual([]);
  });

  it("displays transaction information including date, credit, debit and balance", () => {
    account.depositMoney("10/01/2023", 1000.0);
    result = account.viewTransactions();
    expect(result).toEqual([
      {
        date: "10/01/2023",
        credit: 1000,
        debit: "",
        balance: 1000,
      },
    ]);
  });

  it("returns a second object with date and amount when another transaction logged", () => {
    account.depositMoney("10/01/2023", 1000.0);
    account.depositMoney("13/01/2023", 2000.0);
    expect(account.viewTransactions()).toEqual([
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
    ]);
  });

  it("returns an array of transactions including balance", () => {
    account.depositMoney("10/01/2023", 1000.0);
    account.depositMoney("13/01/2023", 2000.0);
    account.withdrawMoney("14/01/2023", 500.0);
    expect(account.viewTransactions()).toEqual([
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
    ]);
  });

  it("stores amount as an integer even if string is inputted", () => {
    account.depositMoney("10/01/2023", "1000.00");
    result = account.viewTransactions();
    expect(result).toEqual([
      {
        date: "10/01/2023",
        credit: 1000,
        debit: "",
        balance: 1000,
      },
    ]);
  });
});
