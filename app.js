let Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

let Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}

let me = new Student();

me.initialize("Paula", 42);
me.learn("Inheritance");

