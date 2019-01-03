class Computer
  @@users = {}
  def initialize(username, password)
    @username = username
    @password = password
    @files = {}
    @@users[username] = password
    puts Computer.get_users
  end

  def create(filename)
    time = Time.now
    @files[filename] = time
    puts "#{filename} was created at #{time} by #{@username}. "
  end
  def Computer.get_users
    return @@users
  end
end

my_computer = Computer.new("user1","pass")
