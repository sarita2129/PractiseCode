class Person
  $global_variable = "global"

  @@classvar = "classvariable"
  def initialize(name)
    @name = name
  end
  def display
    puts "Hello world"
    @msg = "#{@name} Created"
    puts @name
    puts @@classvar
    puts @msg
    puts $global_variable

  end
end


# puts @name
# puts @@classvar
# puts @msg
puts $global_variable

# person = Person.new("Eric").display
# person = Person.new("Peter").display
