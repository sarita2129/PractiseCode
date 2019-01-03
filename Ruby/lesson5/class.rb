class Person
  def initialize(fname,lname,age)
    @first_name = fname
    @last_name = lname
    @age = age
  end
  def desc
    puts "My name is #{@first_name} #{@last_name} and I am #{@age} years old."
  end
end

person = Person.new("Latha","Mishra",28)

puts person.desc
