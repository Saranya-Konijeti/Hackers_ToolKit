// ===============================
// 1. Smooth Scroll for Tool Buttons
// ===============================
document.querySelectorAll(".button").forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const sections = document.querySelectorAll("section");
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  });
});


// ===============================
// 2. Copy Command on Click
// ===============================
const commandBoxes = document.querySelectorAll(
  ".commonbox, .commonbox1, .commonbox2, .commonbox3"
);

commandBoxes.forEach(box => {
  box.style.cursor = "pointer";

  box.addEventListener("click", () => {
    navigator.clipboard.writeText(box.innerText);
    const originalText = box.innerText;
    box.innerText = "✔ Command Copied!";
    
    setTimeout(() => {
      box.innerText = originalText;
    }, 1200);
  });
});


// ===============================
// 3. Accordion for Dropdowns
// ===============================
const dropdowns = document.querySelectorAll(
  ".dropdown-container input[type='checkbox']"
);

dropdowns.forEach(current => {
  current.addEventListener("change", () => {
    dropdowns.forEach(other => {
      if (other !== current) other.checked = false;
    });
  });
});


// ===============================
// 4. Scroll Reveal Animation
// ===============================
const revealElements = document.querySelectorAll("section");

const revealOnScroll = () => {
  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

revealElements.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===============================
// 5. Active Section Highlight (Header Text)
// ===============================
const headerText = document.querySelector(".center");
const toolNames = ["Nmap", "Wireshark", "Burp Suite", "Metasploit"];

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      headerText.innerText = toolNames[i];
    }
  });
});
