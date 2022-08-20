// Assignment Operators
  var v = 4;
  var c = 5;
  var k = (v - c);
  console.log(k);
  // Operand
   var a = 20;
   var b = 6;
   a +=b;
   console.log( a);
   // Example 2
   var g = 15;
   var d =  2;
   g -= d;
   console.log(g);
   // String operators
   var firstName = "Natoolo";
   var lastName  = "Juliet";
   firstName += lastName;
   console.log(firstName);
   // Comparison Operators
   var g =  7;
   var h =  7;
   console.log(g == h );
   var a = 8;
   var k = 6;
   console.log(a == k );
   // Addition Operator
   var m = 4 + 9;
   console.log(m);
   // Exponentiation Operators (**)
   var d = 3**4;
   console.log(d );
   // Remainder Operator (%)
   var n = 6 % 4;
   console.log(n);
   // Increment Operator (++)
   var s = 9;
   s++;
   console.log(s);
   // Decrement Opertor (--)
   var m = 7;
   m--;
   console.log(m);
   // Operator Sequence 
   var q = 4 + 5 * 9;
   console.log(q);
   // Equally Comparison Operator
console.log
  (2==2);
   (6==6);
   (6==6);
   // Functions
  function addNumbers(num1, num2) {
         var sum = num1 + num2;
         return sum;
      }
      
      /* the function caller */
      console.log(addNumbers(2, 5));
  // Objects
  var person ={
    name: "Charles " ,
    job: "programmer ",
    age: 20,
    location: "Kakuma ",
  }
  console.log(person.name + "the " + person.job + "who is " + person.age + "years old " + "lives in " + person.location)
  // Arrays
  var countries =["China", "Japan", "Ghana", "Uganda"]
  console.log(countries);
  // Assessing item number
  console.log(countries[0]);
  console.log(countries[3]);
  // Adding item to the end of the array
  countries.push("Canada");
  // Adding item infornt of an array 
  countries.unshift("India");
  // Removing inserted item in an array 
  countries.pop()
  // Removing first item in an array 
  countries.shift();
  // Marks
  var marks =[34, 56, 12, 18, 90, 46, 34, 56, 78, 80]
  // Assessing array length 
  console.log(marks[marks.length-1]);
  
  // Getting array type
  var type = typeof countries;
  console.log(typeof countries);
  var type =typeof marks;
  console.log(typeof marks);
  // Getting number of each item in array 
  var cities = ["Madrid", "Berlin", "Tokyo"];
      cities.forEach(function(val, i, arr) {
         console.log(i + ": " + val);
      });
  // Separating strings which isn't defined 
  var cities = ["Madrid", "Berlin", "Tokyo"];
      var str = cities.join();
      console.log(str);
  
   // Specified separation
   var cities = ["Madrid", "Berlin", "Tokyo"];
      var str = cities.join('-');
      console.log(str);
      
  // Changing strings to arrays
  var string = "I am coding now ";
  var array = string.split("");
  console.log(array);
  console.log(array.length);
  
  // Merging arrays (Example 001)
  let color1 = ["black", "yellow", "red"];
  let color2 = ["green", "blue", "white"];
  let colors = color1.concat(color2);
      console.log(colors);
  // Example 002
  var num1 = [1 , 2, 3, 5 ];
  var num2 = [6, 7, 8, 9, 10];
  var all = num1.concat(num2);
      console.log(all);
  
  // Searching for items in an array ( Item index)
  var fruits = ["Mango", "Apple", "Orange", "Grape", "Mango"];
      var i = fruits.indexOf("Mango");
      console.log(i);
  // Example 002
  var coz = ["black", "yellow", "red", "green"];
    var i = coz.lastIndexOf("green");
    console.log(i)
  // Wnen the item isn't found in the array, -1 is returned
var fruits = ["Mango", "Apple", "Orange", "Grape", "Mango"];
      
      var firstIndex = fruits.indexOf("Strawberry"); // returns -1
console.log(firstIndex);