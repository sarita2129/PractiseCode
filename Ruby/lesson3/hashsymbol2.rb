movies = {
  StarWars: 4.8,
  Divergent: 4.7
  }

puts "What would you like to do? "

choice = gets.chomp

case choice
when "add"
  puts "What movie would you like to add? "
  title = gets.chomp
  list = movies.select{|k,v| k.to_s == title}
  if list.length == 0
    puts "What rating does the movie have? "
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "Movie #{title} with rating #{rating} is added."
  else
    puts "That movie already exists! Its rating is #{movies[title.to_sym]}."
  end
when "update"
  puts "What movie would you like to update? "
  title = gets.chomp
  list = movies.select{|k,v| k.to_s == title}
  if list.length == 0
    puts "That movie does not exist."
  else
    puts "What is the new rating? "
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "Movie #{title} with rating #{rating} is updated."

  end
when "display"
  movies.each do |title, rating|
    puts "#{title}: #{rating}"
  end
when "delete"
  puts "What movie would you like to delete? "
  title = gets.chomp
  list = movies.select{|k,v| k.to_s == title}

 if list.length == 0
   puts "That movie does not exist."
 else
   puts movies.delete(title)
   puts "Movie #{title} is deleted."

 end
else
  puts "Error!"
end
