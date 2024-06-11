class BankAccount:
    def __init__(self, account_number, balance):
        self.account_number = account_number
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return self.balance
        else:
            return "Insufficient funds"

    def get_balance(self):
        return self.balance

# Example usage:
account = BankAccount("123456789", 1000)
print(account.deposit(500))        # Output: 1500
print(account.withdraw(200))       # Output: 1300
print(account.get_balance())       # Output: 1300
