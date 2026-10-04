// Sidebar menu (mobile)
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const btn = document.getElementById("menuBtn");
  const open = sidebar.classList.toggle("open");
  btn.innerHTML = open ? "&#10005;" : "&#9776;";
  btn.setAttribute("aria-expanded", open);
}

// Video modal: plays on open, stops and resets on close
function openVideo() {
  document.getElementById("videoModal").classList.add("show");
  document.getElementById("myVideo").play();
}
function closeVideo() {
  const video = document.getElementById("myVideo");
  document.getElementById("videoModal").classList.remove("show");
  video.pause();
  video.currentTime = 0;
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && document.getElementById("videoModal")) closeVideo();
});

// Admission enquiry form
function sendForm() {
  const name = document.getElementById("name").value.trim();
  document.getElementById("formMessage").textContent =
    "Thank you, " + name + ". Our office will contact you soon.";
  document.getElementById("contactForm").reset();
  return false;
}
