// loadFooter.js

async function loadFooter() {
  try {
    const response = await fetch("../../footer.html");
    const footerContent = await response.text();
    document.getElementById("footer").innerHTML = footerContent;
  } catch (error) {
    console.error("Error loading footer:", error);
  }
}

// Call the function to load the footer content
loadFooter();
