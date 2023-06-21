# Bank Tech Test

## Challenge Description

### Acceptance criteria:

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
    date || credit || debit || balance
    14/01/2023 || || 500.00 || 2500.00
    13/01/2023 || 2000.00 || || 3000.00
    10/01/2023 || 1000.00 || || 1000.00
```

### Approach

I started by creating a diagram to decide on the classes needed to create this programme. I decided that the programme needed two classes, one to record the transactions by handling the inputs, and the other to print these out as a statement.
After planning the classes in my diagram, I created a new project in VSCode and installed jest as the testing framework for JavaScript.
I began by writing the tests for the AccountTransaction class, then writing the code to pass these tests, I then repeated these steps for the AccountStatement class, finishing with an integration test for both. 


## Diagram

![Account Diagram](./images/AccountDiagram.png)

## To run programme using node

1. Clone project into your local machine
2. Open terminal and go into the directory bank_tech_test

   ```
   cd bank_tech_test

   ```

3. Install dependencies by running npm install

   ```
   npm install

   ```

4. Run programme useing node

   ```
   node

   const AccountTransaction = require('./AccountTransaction');

   let account = new AccountTransaction();

   account.depositMoney(1000.00);

   account.depositMoney(2000.00);

   const transactions = account.withdrawMoney(500.00);

   const AccountStatement = require('./AccountStatement');

   let statement = new AccountStatement(transactions);

   statement.displayStatement();

   ```
## Screenshot of Project Running

![Project Running Screenshot](./images/ProjectRunning.png)

## How to run the tests
Make sure you are in the bank_tech_test directory and then in your terminal, run jest:

   ```
   cd bank_tech_test

   jest

   ```

## Screenshot of Passing Tests

![Passing Tests](./images/PassingTests.png)




