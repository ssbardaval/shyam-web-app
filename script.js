function greetStudent() {
  const name = document.getElementById("studentName").value;
  const messageElement = document.getElementById("greetingMsg");

  if (name.trim() === "") {
    messageElement.innerText = "Please enter your name!";
  } else {
    messageElement.innerText = `Welcome, ${name}! We’re excited to help you study abroad 🌍`;
  }
}
