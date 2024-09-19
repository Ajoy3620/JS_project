let toastBox = document.getElementById("toastBox");
let successMsg =
  '<i class="fa-solid fa-check-to-slot"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-xmarks-lines"></i>Fix The Error';
let invalidMsg =
  '<i class="fa-solid fa-triangle-exclamation" ></i> Give The Valid Value && Check Again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
