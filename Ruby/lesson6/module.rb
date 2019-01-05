module Circle

  PI = 3.141592653589793

  def Circle.area(radius)
    PI * radius**2
  end

  def Circle.circumference(radius)
    2 * PI * radius
  end
end

module Square
  def Square.area(side)
    side**2
  end

  def Square.Perimeter(side)
    4 * side
  end
end

puts Circle::area(10)
puts Square::area(10)
