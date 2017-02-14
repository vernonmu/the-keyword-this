//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //
      // The 'this keyword' refers to an object, the subject in context, which will execute some code - explicitly, implicitly, by default, or by a 'new' keyword

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer

      // 1. explicit
      //     the 'this keyword' is assigned its reference by Bind, Apply, or Call
      // 2. implicit
      //     the 'this keyword' is assigned its reference not explicitly, but by inference and assumed
      // 3. default / window
      //     the 'this keyword' is assigned to the window element / globally scoped
      // 4. new keyword

  // 3) What is the difference between call and apply?

      //Answer
      // Call and apply are used within the body of a function and both immediately refer to its object, but in different ways. Call passes parameters as arguments. Apply uses an array to pass its elements as arguments into the function

  // 4) What does .bind do?

      //Answer
      // Bind assigns a reference for the 'this keyword', but it is not assigned until executed by some other function or method


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here


    var user = {
      username: 'string here',
      email: 'email@domain.com',
      getUsername: function() {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year, move){
  console.log(move)
  this.make = make
  this.model = model
  this.year = year
  this.move = move
  this.moveCar = function() {
    return move + 10;



  }

  console.log(mustang)



}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here

// getYear.call(prius);
// getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this



//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here

  // myUser.username;

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer here

  // window

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
