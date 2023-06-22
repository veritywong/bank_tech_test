const AccountTransaction = require("../AccountTransaction");

describe("AccountTransaction", () => {
  let account;
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2023, 5, 20));

  beforeEach(() => {
    account = new AccountTransaction();
  });

  it("displays transaction information including date, credit, debit and balance", () => {
    let result = account.depositMoney(1000.0);

    expect(result).toEqual([
      {
        date: "20/5/2023",
        credit: 1000,
        debit: "",
        balance: 1000,
      },
    ]);
  });

  it("returns a second object with date and amount when another transaction logged", () => {
    account.depositMoney(1000.0);
    result = account.depositMoney(2000.0);
    expect(result).toEqual([
      {
        date: "20/5/2023",
        credit: 1000,
        debit: "",
        balance: 1000,
      },
      {
        date: "20/5/2023",
        credit: 2000,
        debit: "",
        balance: 3000,
      },
    ]);
  });

  it("returns an array of transactions including balance", () => {
    account.depositMoney(1000.0);
    account.depositMoney(2000.0);
    result = account.withdrawMoney(500.0);
    expect(result).toEqual([
      {
        date: "20/5/2023",
        credit: 1000,
        debit: "",
        balance: 1000,
      },
      {
        date: "20/5/2023",
        credit: 2000,
        debit: "",
        balance: 3000,
      },
      {
        date: "20/5/2023",
        credit: "",
        debit: 500,
        balance: 2500,
      },
    ]);
  });

  it("stores amount as an integer even if string is inputted", () => {
    result = account.depositMoney("1000.00");

    expect(result).toEqual([
      {
        date: "20/5/2023",
        credit: 1000,
        debit: "",
        balance: 1000,
      },
    ]);
  });

  it("throws an error if withdrawing more than balance", () => {
    account.depositMoney(500);

    expect(() => {
      account.withdrawMoney(1000);
    }).toThrow("Error: Insufficient credit");
  });

  it("throws an error if number not inputted", () => {
    expect(() => {
      account.depositMoney();
    }).toThrow("Invalid Input");
  });

  it("throws an error if empty string inputted", () => {
    expect(() => {
      account.depositMoney("");
    }).toThrow("Invalid Input");
  });
});
