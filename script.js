function showAlert() {
  alert("Welcome to MyLandingPage!");
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));

  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active');
}
