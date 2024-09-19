const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  let notes = localStorage.getItem("notes");

  if (!notes) {
    // Default notes if none are found in localStorage
    notes = `
      <p class="input-box" contenteditable="true">Note 1<img src="delete.png" class="delete-btn"></p>
      <p class="input-box" contenteditable="true">Note 2<img src="delete.png" class="delete-btn"></p>
    `;
    localStorage.setItem("notes", notes);
  }

  notesContainer.innerHTML = notes;
}

showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let noteCount = notesContainer.querySelectorAll(".input-box").length + 1;
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputBox.textContent = `Note ${noteCount}`;
  img.src = "delete.png";
  img.className = "delete-btn";
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

notesContainer.addEventListener("input", function (e) {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" &&
    document.activeElement.classList.contains("input-box")
  ) {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
