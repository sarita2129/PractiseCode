def batman_ironman_proc
  victor = Proc.new { return "Batman will win!" }
  victor.call
  "Iron Man will win1!"
end

puts batman_ironman_proc

def batman_ironman_lambda
  victor = lambda { return "Batman will win!" }
  victor.call
  "Iron Man will win2!"
end

puts batman_ironman_lambda

my_array = ["raindrops", :kettles, "whiskers", :mittens, :packages]

# Add your code below!
symbol_filter = lambda {|x| x.is_a? Symbol }
symbols = my_array.select(&symbol_filter)
puts symbols

odds_n_ends = [:weezard, 42, "Trady Blix", 3, true, 19, 12.345]

# Add your code below!
nums = lambda{|n| n.is_a?Integer}
ints = odds_n_ends.select(&nums)
puts ints

crew = {
  captain: "Picard",
  first_officer: "Riker",
  lt_cdr: "Data",
  lt: "Worf",
  ensign: "Ro",
  counselor: "Troi",
  chief_engineer: "LaForge",
  doctor: "Crusher"
}
# Add your code below!

first_half = lambda{|k,x| x < "M"}

a_to_m = crew.select(&first_half)

puts a_to_m
