print "Thring please "
user_input = gets.chomp
user_input.downcase!
unless user_input != ""
  print "Thring please "
  user_input = gets.chomp
	user_input.downcase!
end
if user_input.include?"s"
  user_input.gsub!(/s/, "th");
else
  puts "Nothing to change."
end

puts "Your string #{user_input}."
