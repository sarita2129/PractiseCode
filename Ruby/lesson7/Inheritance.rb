class Employee
  attr_reader :name,:salary
  def initialize(name,salary)
    @name = name
    @salary = salary
  end
  def CalcSalary(rate)
    @salary += rate * salary / 100
    puts "You are in main class"
  end

end
class AccountEmployee < Employee

end
class SalesEmployee < Employee
  def CalcSalary(rate,salesperYear)
    if salesperYear > 10000
      @salary += (rate + 5) * salary / 100
    else
      @salary += rate * salary / 100
    end
    puts "You are in child class"
  end
end
employee = Employee.new("Richard",20000)
employee.CalcSalary(10)
puts employee.salary

accountemployee = AccountEmployee.new("anna",12000)
accountemployee.CalcSalary(10)
puts accountemployee.salary

salesemployee = SalesEmployee.new("anna",10000)
salesemployee.CalcSalary(10,12000)
puts salesemployee.salary
