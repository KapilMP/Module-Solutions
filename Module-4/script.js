(function () {

var names = ["Yaakov", "John", "Jen", "jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0);//index one of the given values of the array.

  if (firstLetter === 'j' || firstLetter === "J") {
    byeSpeaker(names[i]);
  } else {
    helloSpeaker(names[i]);
  }
}

})();
