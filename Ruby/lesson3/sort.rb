books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# To sort our books in ascending order, in-place
books.sort! { |firstBook, secondBook| firstBook <=> secondBook }

# Sort your books in descending order, in-place below
books.sort! { |firstBook, secondBook|  secondBook <=> firstBook }

def alphabetize(arr, rev=false)
  arr.sort!
  if(rev == true)
    return arr.reverse!
  else
    return arr
  end
end

numbers = [1,3,5,8]

puts alphabetize(numbers,true)
