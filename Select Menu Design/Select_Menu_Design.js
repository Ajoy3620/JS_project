var selectField = document.getElementsByClassName("selectField")[0];
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon"); // Fixed ID selection

// Toggle the visibility of the list and rotation of the arrow icon
selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

// Convert HTMLCollection to an array and iterate over options
for (var i = 0; i < options.length; i++) {
  options[i].onclick = function () {
    // Update selectText with the text of the clicked option
    selectText.innerHTML = this.querySelector("p").textContent;
    // Hide the list and rotate the arrow icon
    list.classList.add("hide");
    arrowIcon.classList.remove("rotate");
  };
}
