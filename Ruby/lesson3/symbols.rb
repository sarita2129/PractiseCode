strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

# Add your code below!
symbols = []

strings.each{ |x|
  symbols.push(x.to_sym)
  #symbols.push(x.intern)

  }

print symbols

movies = {
  :JurassicWorld => "test123",
  :DieHard => "test234"
  }

  movies = {
  children: "Moana",
  scifi: "Mortal Kombat",
  history: "Lincoln"
}
