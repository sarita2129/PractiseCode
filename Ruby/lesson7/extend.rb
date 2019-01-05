module Circle
  PI = 3.141592653589793

  def area_circle(radius)
    PI * radius**2
    puts "Area of circle #{(PI * radius**2).to_s}"
  end

  def circumference(radius)
    2 * PI * radius
  end
end

module Square
  def area_sqr(side)
    side**2
    puts "Area of Square #{(side**2).to_s}"
  end

  def Perimeter(side)
    4 * side
  end
end

class Geometry
extend Circle
extend Square
def area_rect
  puts "This is method within the class"
end

end
class Rectangle < Geometry
  def area_circle_child
    Geometry.area_circle(10)
  end
end

Geometry.area_circle(10)
Geometry.area_sqr(10)
Geometry.new.area_rect
rect = Rectangle.new
rect.area_circle_child
# geometry = Geometry.new
# geometry.area_rect

#rect = Rectangle.new
#rect.area(10)
