// loadNav.js

async function loadNav() {
  try {
    const response = await fetch("../../nav.html");
    const navContent = await response.text();
    document.getElementById("nav").innerHTML = navContent;
  } catch (error) {
    console.error("Error loading nav:", error);
  }
}

// Call the function to load the nav content
loadNav();
