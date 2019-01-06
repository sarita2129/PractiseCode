class Person
  attr_reader :name
  attr_accessor :job

  def initialize(name, job)
    @name = name
    @job = job
  end
  # def name
  #   return @name
  # end
  # def job
  #   return @job
  # end
end

person = Person.new("Peter","sales")
puts person.name
puts person.job

# puts person.instance_variable_get(:@name)
# puts person.instance_variable_get(:@job)
