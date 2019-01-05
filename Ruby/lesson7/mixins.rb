module LandHabitat
  attr_reader :name

  def walk(name)
    puts "I am #{name} and I can walk on land"
  end
end

module WaterHabitat
  attr_reader :name

  def swim(name)
    puts "I am #{name} and I can swim in water"
  end
end

class Crocodile
  include WaterHabitat
  include LandHabitat

  attr_reader :name
  def initialize(name)
    @name = name
  end
  def activities
    walk(name)
    swim(name)
    puts "I am one of the strongest predator on earth!!! hahaha"
  end
 end


crocodile = Crocodile.new("Bindi")
crocodile.activities()
