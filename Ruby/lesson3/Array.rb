languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

languages.each { |x|
  puts x
  }

s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]

s.each do |x|
  x.each do |y|
    puts y
  end
end

my_array = [3, 4, 8, 7, 1, 6, 5, 9, 2]

# Call the sort! method on my_array below.
# my_array should then equal [1, 2, 3, 4, 5, 6, 7, 8, 9].

my_array.sort!

puts my_array
