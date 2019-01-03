i = 20
loop do
  i -= 1
  next if i % 2 == 0

  print "#{i}"
  break if i <= 0
end

odds = [1,3,5,7,9]

# Add your code below!

odds.each do |x|
  x = x * 2
  print x
end

20.times do
  print "I like Ruby language!"
end
for num in 1...10
puts num
end

for num in 1..10
puts num
end

i = 1
while i <= 50 do
  print i
  i += 1
end

i = 1
until i == 51 do
  print i
  i += 1
end

a = 1
loop do
  a += 1
  print "Ruby!"
  break if a == 31
end
