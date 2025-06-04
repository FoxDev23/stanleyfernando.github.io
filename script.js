const descriptionParagraphs = document.querySelectorAll(".description");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Mostrar mais";
toggleBtn.id = "toggle-description";
toggleBtn.style.margin = "15px 0";
toggleBtn.style.padding = "10px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.border = "none";
toggleBtn.style.backgroundColor = "var(--main-color)";
toggleBtn.style.color = "var(--main-text-color)";

let descriptionVisible = false;
descriptionParagraphs[1].style.display = "none";

toggleBtn.addEventListener("click", () => {
  descriptionVisible = !descriptionVisible;
  descriptionParagraphs[1].style.display = descriptionVisible ? "block" : "none";
  toggleBtn.textContent = descriptionVisible ? "Mostrar menos" : "Mostrar mais";
});

const aboutContainer = document.getElementById("about-container");
aboutContainer.insertBefore(toggleBtn, document.getElementById("btn-projects"));


const themeBtn = document.createElement("button");
themeBtn.textContent = "Trocar Tema";
themeBtn.id = "theme-toggle";
themeBtn.style.position = "fixed";
themeBtn.style.top = "20px";
themeBtn.style.right = "20px";
themeBtn.style.padding = "10px 15px";
themeBtn.style.backgroundColor = "var(--main-color)";
themeBtn.style.color = "#fff";
themeBtn.style.border = "none";
themeBtn.style.borderRadius = "5px";
themeBtn.style.cursor = "pointer";
themeBtn.style.zIndex = "1000";

document.body.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.textContent = document.body.classList.contains("dark-theme") ? "Tema Claro" : "Tema Escuro";
});


const style = document.createElement('style');
style.innerHTML = `
  body.dark-theme {
    --main-text-color: #111;
    --bio-bg-color: #f0f0f0;
    --bio-border-color: #ccc;
    --about-bg-color: #ffffff;
    background-color: var(--about-bg-color);
    color: var(--main-text-color);
  }

  body.dark-theme a {
    color: #333;
  }
`;
document.head.appendChild(style);


const skillIcons = document.querySelectorAll(".skills-box i");

skillIcons.forEach(icon => {
  icon.style.transition = "transform 0.3s ease";
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});


const btnProjects = document.getElementById("btn-projects");

btnProjects.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Em breve, seus projetos aparecerão aqui! 🚀");
});
