class Person
  attr_reader :name
  attr_accessor :job

  def initialize(name, job)
    @name = name
    @job = job
  end
end

person = Person.new("Peter","sales")
puts person.name
puts person.job
