print "What's your first Name? "
first_name = gets.chomp
first_name.capitalize!

print "What's your last Name? "
last_name = gets.chomp
last_name.capitalize!

print "What is the city you live? "
city = gets.chomp
city.capitalize!

print "What is the state or province? "
state = gets.chomp
state.upcase!

puts "Your name is #{first_name} #{last_name} and you are from #{city} #{state}."
