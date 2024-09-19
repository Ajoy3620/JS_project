const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");

function evaluatePassword(password) {
  let strength = "weak";
  let color = "#ff5925";

  // Password length check
  if (password.length >= 8) {
    strength = "strong";
    color = "#26d730";
  } else if (password.length >= 4) {
    strength = "medium";
    color = "yellow";
  }

  // Additional checks for complexity
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/.test(password);

  if (
    password.length >= 8 &&
    (hasUpper || hasLower) &&
    (hasDigit || hasSpecial)
  ) {
    strength = "strong";
    color = "#26d730";
  } else if (password.length >= 6 && (hasUpper || hasLower)) {
    strength = "medium";
    color = "yellow";
  }

  return { strength, color };
}

pass.addEventListener("input", () => {
  const { strength, color } = evaluatePassword(pass.value);

  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  str.innerHTML = strength;
  pass.style.borderColor = color;
  msg.style.color = color;
});
