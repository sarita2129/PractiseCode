def greeter
  yield
  puts "End"
end

phrase = Proc.new{
  puts "Hello there!"
  }
greeter(&phrase)
