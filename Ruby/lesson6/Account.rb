class Account
  attr_reader :name,:balance
  def initialize(name,balance=100)
    @name = name
    @balance = balance
  end
  public
  def display_balance(pin_number)
    if pin_number == pin
      puts "Balance: $#{@balance}."
    else
      puts pin_error
    end
  end
  public
  def withdraw(pin_number,amount)
    if pin_number == pin
      @balance -= amount
      puts "Withdrew #{amount}. New balance: $#{@balance}."
    else
      puts pin_error
    end
  end
  def deposit(pin_number,amount)
    if pin_number == pin
      @balance += amount
      puts "Deposit #{amount}. New balance: $#{@balance}."
    else
      puts pin_error
    end
  end
  private
  def pin
    @pin = 1234
  end
  private
  def pin_error
    return "Access denied: incorrect PIN."
  end
end
class Checkin_account < Account
end
class Savingin_account < Account
end
checking_account = Account.new("Luke",20000)
checking_account.withdraw(11,200)
checking_account.withdraw(1234,2000)
checking_account.display_balance(1234)
checking_account.deposit(1234,2000)

checkchild = Checkin_account.new("Smita",30000)
checkchild.withdraw(11,200)
checkchild.withdraw(1234,2000)
checkchild.display_balance(1234)
checkchild.deposit(1234,2000)

savingchild = Savingin_account.new("Unni",1000)
savingchild.withdraw(11,200)
savingchild.withdraw(1234,200)
savingchild.display_balance(1234)
savingchild.deposit(1234,200)
