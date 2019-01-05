class LandHabitat
  attr_reader :name
  def initialize(name)
    @name = name
  end
  def walk
    puts "I am #{name} and I can walk on land"
  end
end

class WaterHabitat
  attr_reader :name
  def initialize(name)
    @name = name
  end
  def swim
    puts "I am #{name} and I can swim in water"
  end
end

class Tiger < LandHabitat

end

class Fish < WaterHabitat

end
class Crocodile
  attr_reader :name
  def initialize(name)
    @name = name
  end
  def walk
    puts "I am #{name} and I can walk on land"
  end
  def swim
    puts "I am #{name} and I can swim in water"
  end
end
tiger = Tiger.new("Tim")
tiger.walk
fish = Fish.new("Nemo")
fish.swim
crocodile = Crocodile.new("Bindi")
crocodile.walk
crocodile.swim
