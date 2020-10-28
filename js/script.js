var click = document.getElementById("check");
click.onclick = function() {
	if (document.getElementById('check').checked) {
        alert("By checking this box, you have read and understood the Terms & Conditions.");
}
}

document.getElementById("main").onsubmit = function() {
  if (document.getElementById("UID").value == "") {
    alert("UID Name Field is required");
		return false;
  }
  if (document.getElementById("email").value == "") {
    alert("Email Field is required");
		return false;
  }
}