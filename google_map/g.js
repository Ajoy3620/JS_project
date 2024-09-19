const button = document.getElementById("get-location-button");
function gotLocation(position) {
  console.log(position);
}
function failedToGet() {
  console.log("There was some issue");
}
button.addEventListener("click", async () => {
  const result = navigator.geolocation.getCurrentPosition(
    gotLocation,
    failedToGet
  );
});
