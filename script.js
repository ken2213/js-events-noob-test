
//METHOD 2
/*
const btn = document.querySelector('#btn');

btn.onclick = () => alert("Hello World!");
*/



//METHOD 3
/*
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  alert("Hello World");
});
*/





//O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O



/*
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
*/

// METHOD 2
/*
const btn = document.querySelector('#btn');

btn.onclick = alertFunction;
*/

// METHOD 3
/*

const btn = document.querySelector('#btn');

btn.addEventListener('click', alertFunction);

*/

// Using named functions can clean up your code considerably, and is a really good idea if the function is something that you are going to want to do in multiple places.




// METHOD 3 IS ALWAYS THE BEST OPTION AMONG THE THREE!



//O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O



/*
  The e in that function is an object that references the event itself. Within that object you have access to many useful properties and functions such as which mouse button or key was pressed, or information about the event’s target - the DOM node that was clicked.
*/

/*
const btn = document.querySelector("#btn");

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
*/



//O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O~O



/*
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
*/




