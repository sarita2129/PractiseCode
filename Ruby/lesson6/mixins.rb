# Create your module here!
module MartialArts
  def swordsman
  puts "I'm a swordsman."
  end
end

class Ninja
include MartialArts
  def initialize(clan)
    @clan = clan
  end
  def swordsman
    puts "this is my own method"
  end
end

class Samurai
include MartialArts
  def initialize(shogun)
    @shogun = shogun
  end
end

ninja = Ninja.new("testNinja")
samurai = Samurai.new("testSamurai")
ninja.swordsman
samurai.swordsman
