var myNumber = 0;

function myFunction() {
    var text = document.getElementById('myText').value;
    myNumber = myNumber + text;
    document.getElementById('output').innerHTML = myNumber + text;
}

var newOutput = '';

function newText(thing) {
  newOutput = newOutput + thing;

  document.getElementById('output').innerHTML = newOutput;
}
