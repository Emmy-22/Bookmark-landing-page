const navLink = document.getElementById("nav-link");
const menuToggle = document.getElementById("menu-toggle");
const icon = document.getElementById("bar");



menuToggle.addEventListener("click", () => {
  navLink.classList.toggle("show");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    icon.style.color = "white";
    menuToggle.classList.add("fixed");
  }
  else{
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    icon.style.color = "";
    menuToggle.classList.remove("fixed");
  }
});

document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
question.parentElement.classList.toggle("active");
  });
});




 const result = document.getElementById("result");

function contact() {
  let email = document.getElementById("email");
  let userEmail = email.value;

if (!userEmail) {
result.innerHTML = "Please enter your email.";
result.style.color = "red";

}

 else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
    result.innerHTML = "Please enter a valid email address.";
    result.style.color = "red";
 }
 else {
    result.innerHTML = "Thank you for subscribing!.";
    result.style.color = "white";
  }

email.value = "";
  setTimeout(() => {
  result.innerHTML ="";
}, 3000);
};
  

  
  
 
  
 




