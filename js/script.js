var array = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < array.length; i++) {

    if (array[i].substring(0,1) == "j" || array[i].substring(0,1) == "J") {

      console.log("Good bye " + array[i]);


    }
    else{

     console.log("Hello " + array[i]);

    }

}