document.addEventListener("DOMContentLoaded", () => {
    // Load users with Fetch API
    document.getElementById("loadUsersBtn").addEventListener("click", async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
          const li = document.createElement("li");
          li.textContent = user.name;
          userList.appendChild(li);
        });
      } catch (err) {
        console.error("Failed to load users:", err);
      }
    });
  
    // FAQ Toggle (click and keyboard)
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
  
    // Dark theme toggle
    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
      });
    }
  });
  