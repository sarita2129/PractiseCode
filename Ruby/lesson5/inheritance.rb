class Application
  def initialize(name)
    @name = name
  end
  def desc
    puts "#{@name}"
  end
end

class MyApp < Application

end
# Add your code below!
myapp = MyApp.new("child")
puts myapp.desc

class Creature
  def initialize(name)
    @name = name
  end

  def fight
    return "Punch to the chops!"
  end
end
class Dragon < Creature
  def fight
   puts "Instead of breathing fire..."
   super()
 end
 end
