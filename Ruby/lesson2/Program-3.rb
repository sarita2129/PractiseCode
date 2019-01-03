puts "Enter the text to search through : "
text = gets.chomp

puts "Enter the redact word : "
redact = gets.chomp

word = text.split(" ")

word.each do |item|
  if(item != redact)
    print item + " "
  else
    print "REDACTED"
  end
end
