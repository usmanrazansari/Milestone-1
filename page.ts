let skills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript"];

function displaySkills() {
  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    let ul = document.createElement("ul");
    skills.forEach((skill) => {
      let li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });
    skillsSection.appendChild(ul);
  }
}
window.onload = displaySkills;
