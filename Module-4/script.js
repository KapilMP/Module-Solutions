(function () {

var names = ["Yaakov", "John", "Jen", "jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0);//index one of the given values of the array.

  if (firstLetter === 'j' || firstLetter === "J") {
    console.log("GoodBye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}

})();
