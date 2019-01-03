secret_identities = {
  "The Batman" => "Bruce Wayne",
  "Superman" => "Clark Kent",
  "Wonder Woman" => "Diana Prince",
  "Freakazoid" => "Dexter Douglas"
}

secret_identities.each do |x,y|
  puts "#{x}: #{y}"
end

my_hash = {
"firstname" => "Rekha",
"lastname" => "Menon",
"city" => "Mumbai",
"state" => "Maharashtra"
}

my_hash = Hash.new
my_hash["firstname"] = "Rekha"
my_hash["lastname"] = "Menon"
my_hash["city"] = "Mumbai"
my_hash["state"] = "Maharashtra"

lunch_order = {
  "Ryan" => "wonton soup",
  "Eric" => "hamburger",
  "Jimmy" => "sandwich",
  "Sasha" => "salad",
  "Cole" => "taco"
}

lunch_order.each do |x,y|
  puts y
end

puts "Text Please : "
text = gets.chomp

words = text.split(" ")

frequencies = Hash.new(0)

words.each{ |word| frequencies[word] += 1}

frequencies = frequencies.sort_by do |word,count| count
end
frequencies.reverse!

frequencies.each{ |word,count|
		puts "#{word} #{count.to_s}"
  }
