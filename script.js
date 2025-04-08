document.addEventListener("DOMContentLoaded", () => {
    // Load users (for index.html)
    const loadBtn = document.getElementById("loadUsersBtn");
    if (loadBtn) {
      loadBtn.addEventListener("click", async () => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const users = await res.json();
          const userList = document.getElementById("userList");
          userList.innerHTML = "";
          users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
          });
        } catch (err) {
          console.error("Failed to load users:", err);
        }
      });
    }
  
    // FAQ toggle (for index.html)
    document.querySelectorAll(".question").forEach((q) => {
      q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        if (answer) {
          answer.classList.toggle("visible");
        }
      });
  
      q.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          const answer = q.nextElementSibling;
          if (answer) {
            answer.classList.toggle("visible");
          }
        }
      });
    });
  
    // Theme toggle (works on all pages)
    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
      });
    }
  
    // Contact form validation (only runs on contact.html)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();
  
        if (name === "" || message === "") {
          alert("Please fill out all fields.");
        } else {
          const response = document.getElementById("response");
          response.innerText = `Thanks, ${name}. We'll get back to you soon!`;
          contactForm.reset();
        }
      });
    }
  });
  