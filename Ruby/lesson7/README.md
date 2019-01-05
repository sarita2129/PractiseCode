**Ruby Programming**
**Contents Covered**
* Class
Ruby is an object-oriented programming language, which means it manipulates programming constructs called objects. (Almost) everything in Ruby is an object! You've been using them all along, so they should be very familiar. Objects have methods, which you've seen before, and attributes, which are just data.

Below is the syntax for creating class:<br/>
class Name <br/>
code content here<br/>
end

New instance of class is created by using Name.new keyword
  - initialize
    initialize is a method used for class definition

* Scope
  - Global variables
    Variables that are available everywhere in the program. It is declared using "$" symbol or declare it outside of the class.
  - Class variables
    Variables that are members of the class. It is declared with "@@"
  - Instance Variables
    Variables that are available to the particular instance of the class. It is declared with "@"
* Access Modifiers
  - Public
    Methods declared public are accessible from anywhere. By default all methods in Ruby are public if not declared.
  - Private  
    Methods declared private are restricted to class it belongs.

* Module
  Module contains a set methods and constants. You can think of modules as being very much like classes, only modules can't create instances and can't have subclasses.
  Below is the syntax for creating module<br/>

    module ModuleName<br/>
    module code <br/>
    end <br/>
  - Require
    If you want to use any module in a class then you can achieve it by "require". For eg: If you want to use Ruby Date module to show today's date, then simply use require 'date' <br/>
      Below is the syntax <br/>
      require 'date' <br/>

      puts Date.today <br/>

  - Include  
    Any class that includes a certain module can use those module's methods. You no longer have to prepend your constants and methods with the module name.
      Below is the syntax <br/>
      Math::cos changes to cos <br/>

      class Angle <br/>
      &nbsp;include Math <br/>
      &nbsp;attr_accessor :radians <br/>     
      &nbsp;def initialize(radians)<br/>
      &nbsp;&nbsp;@radians = radians <br/>
      &nbsp;end<br/>
      &nbsp;def cosine <br/>
      &nbsp;&nbsp;cos(@radians) <br/>
      &nbsp;end <br/>
      end
* OOPS features
  - Inheritance
    Inheritance is the process by which one class takes on the attributes and methods of another.
    Below is the syntax

    class BaseClass <br/>
    &nbsp;def base_method <br/>
    &nbsp;&nbsp;puts "Base class" <br/>
    &nbsp;end <br/>
    end

    class childclass < BaseClass
    end

    Sometimes you'll want one class that inherits from another to not only take on the methods and attributes of its parent, but to override one or more of them.
  - Extends
    The extend keyword mixes a module's methods at the class level. This means that class itself can use the methods, as opposed to instances of the class.
  - Mixins
    Ruby does not support multiple inheritance. However, there are instances where you want to incorporate data or behavior from several classes into a single class, and Ruby allows this through the use of mixins.
