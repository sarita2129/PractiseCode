**Ruby Programming**
**Contents Covered**
**Blocks** <br />
A Ruby block is just a bit of code that can be executed. Block syntax uses either do..end or curly braces ({})
Below is the eg for Block:<br />
&nbsp;[1, 2, 3].each do |num| <br />
&nbsp;&nbsp;&nbsp;  puts num<br />
&nbsp;end<br />

**Proc** <br />
Procs are saved blocks. Unlike blocks, procs can be called over and over without rewriting them. This prevents you from having to retype the contents of your block every time you need to execute a particular bit of code.

Below is the syntax for Proc:<br />

&nbsp;group_1 = [4.1, 5.5, 3.2, 3.3, 6.1, 3.9, 4.7]<br />

&nbsp;over_4_feet = Proc.new {|height| <br />
&nbsp;&nbsp;   height >= 4<br />
&nbsp;  }<br />
&nbsp;can_ride_1 = group_1.select(&over_4_feet)<br />

**Lambda**<br />
lambdas are identical to procs except for 2 main differences
 - Lambda checks the number of arguments passed to it, while a proc does not.Lambda will throw error if you pass it the wrong number of arguments, whereas a proc will ignore unexpected arguments and assign nil to any that are missing.
 - When a lambda returns, it passes control back to the calling method; when a proc returns, it does so immediately, without going back to the calling method.
Below is the syntax <br />

&nbsp;strings = ["leonardo", "donatello", "raphael", "michaelangelo"] <br />
&nbsp;symbolize = lambda{|n| n.to_sym} <br />
&nbsp;symbols = strings.collect(&symbolize)<br />
&nbsp;print symbols <br />

**Yield** <br />
Yield keyword in the method is replaced with the block of code.
Below is the syntax <br />
&nbsp;def one_yield<br />
&nbsp;&nbsp;  yield <br />
&nbsp;end

&nbsp;def multiple_yields<br />
&nbsp;&nbsp;  yield <br />
&nbsp;&nbsp;  yield <br />
&nbsp;end

&nbsp;one_yield { puts "one yield" }

&nbsp;multiple_yields { puts "multiple yields" } <br />

**Symbols**<br />
