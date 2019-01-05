# ThePresent has a .now method that we'll extend to TheHereAnd

module ThePresent
  def now
    puts "It's #{Time.new.hour > 12 ? Time.new.hour - 12 : Time.new.hour}:#{Time.new.min} #{Time.new.hour > 12 ? 'PM' : 'AM'} (GMT)."
  end
  def text
    puts "test"
  end
end
module ThePast
  def before
    puts "past"
  end
end
class TheHereAnd
  extend ThePresent
  extend ThePast
end

TheHereAnd.now
TheHereAnd.text
TheHereAnd.before
