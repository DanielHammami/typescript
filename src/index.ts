class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  private calculateTax(): void {}

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account);
