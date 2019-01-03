fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

# Add your code below!

doubled_fibs = fibs.collect {|num| num * 2}

def yield_name(name)
  puts "In the method! Let's yield."
  yield("Kim")
  puts "In between the yields!"
  yield(name)
  puts "Block complete! Back in the method."
end

yield_name("Eric") { |n| puts "My name is #{n}."
  }
  yield_name("Ruby") {|n| puts "My name is #{n}."}

  def double(num)
  puts "double number is #{num * num}"
  yield(3)
  puts "End of block"
end

double(2){|n| puts "double Yield number is #{n * 2}"}
