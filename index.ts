class Account {
  private _id: string;
  private _balance: number;

  constructor(id: string, balance: number) {
    this._id = id;
    this._balance = balance;
  }

  get id(): string {
    return this._id;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(newBalance: number) {
    this._balance = newBalance;
    if (this._balance < 0) throw Error("Negative balance impossible");
  }
}

class Bank {
  private accounts: Account[];

  addAccount(account: Account): void {
    this.accounts.push(account);
  }

  getAccountById(id: string): Account | undefined {
    for (let i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].id === id) {
    return this.accounts[i];
    }
    }
    return undefined;
  }

  transfer_money(fromId: string, toId: string, amount: number): void {
    const fromAccount = this.getAccountById(toId);
    const toAccount = this.getAccountById(fromId);
    if (fromAccount && toAccount) {
    fromAccount.balance -= amount;
    toAccount.balance += amount;
    }
  }
}

let bank = new Bank();

try{
bank.addAccount(new Account("1", 100));
bank.addAccount(new Account("2", 333));
bank.transfer_money("1", "2", 500);  
}catch(e) {
console.error("Error", e);
}

console.log(bank)