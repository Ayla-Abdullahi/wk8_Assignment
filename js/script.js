// Greeting with user input (now only updates greeting section)
document.getElementById("mySubmit").onclick = function () {
  let username = document.getElementById("myText").value;
  if (username.trim() !== "") {
    document.getElementById("greetings").textContent = `Hello ${username}! Have a great day `;
  } else {
    document.getElementById("greetings").textContent = "Please enter your name ";
  }
};

// Circle circumference calculator
const PIE = 3.142;
document.getElementById("Button2").onclick = function () {
  let radius = document.getElementById("radius").value;
  if (radius > 0) {
    let circumference = PIE * radius * 2;
    document.getElementById("result").textContent = `Circumference: ${circumference.toFixed(2)}`;
  } else {
    document.getElementById("result").textContent = "Please enter a valid radius.";
  }
};

// Counter tool
let count = 0;
document.getElementById("increaseBTN").onclick = () => {
  count++;
  document.getElementById("countLabel").textContent = count;
};
document.getElementById("decreaseBTN").onclick = () => {
  count--;
  document.getElementById("countLabel").textContent = count;
};
document.getElementById("resetBTN").onclick = () => {
  count = 0;
  document.getElementById("countLabel").textContent = count;
};

// Navbar toggle for mobile
document.querySelector(".hamburger").onclick = () => {
  document.querySelector(".navbar").classList.toggle("active");
};

// Example email slicing (for console log demo)
const email = "abdullahayla@gmail.com";
let username1 = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(`Username: ${username1}, Domain: ${extension}`);

//JS for Mobile Menu 
const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
