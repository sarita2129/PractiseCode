def greeting
 puts "greeting"
end



# Define your method above this line.

greeting

def add(num1,num2)
  return num1 + num2
end

def greeter(name)
  return "Greetings #{name}"
end

def by_three?(number)
  if number % 3 == 0
    return true
  else
    return false
  end
end
puts greeter('Michael')
puts by_three?(5)

book_1 = "A Wrinkle in Time"

book_2 = "A Brief History of Time"

puts book_1 <=> book_2
