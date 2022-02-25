function checkEmail() {
  const userEmail = document.getElementById("email1");
  let filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(userEmail.value)) {
    userEmail.style.backgroundColor = "red";
    alert("Please provide a valid email address");
    userEmail.focus;
    return false;
  }
}
