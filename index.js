// setting the splash screen to go to the main index.html after 5sec

setTimeout(function () {
  document.getElementById("splash-screen").classList.add("hidden");
  setTimeout(function () {
    window.location.href = "./index-2.html";
  }, 50);
}, 3000);

const activities = [
  "Movie night with favorite film or TV show",
  "Board game",
  "Card game",
  "Try a new restaurant",
  "See a movie",
  "Take a cooking class together",
  "Go on a scenic hike",
  "Attend a concert",
  "Visit a theme park",
  "Take a dance class together",
  "Go to a wine tasting event",
];

document.getElementById("generate").addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * activities.length);
  document.getElementById("output").innerHTML = activities[randomIndex];
});

// document.getElementById("addBtn").addEventListener("click", function () {
//   let newString = document.getElementById("newString").value;
//   strings.push(newString);
//   document.getElementById("newString").value = "";
//   displayStrings();
// });

// function removeString(index) {
//   strings.splice(index, 1);
//   displayStrings();
// }

// function displayStrings() {
//   let stringList = document.getElementById("stringList");
//   stringList.innerHTML = "<ul>";
//   for (let i = 0; i < strings.length; i++) {
//     stringList.innerHTML +=
//       "<li>" +
//       strings[i] +
//       " <button onclick='removeString(" +
//       i +
//       ")'>Remove</button></li>";
//   }
//   stringList.innerHTML += "</ul>";
// }
