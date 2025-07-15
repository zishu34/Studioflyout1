// Default admin password
const ADMIN_PASSWORD = "flyout@123";

// === Admin Login ===
function loginAdmin() {
  const input = document.getElementById("admin-password").value;
  if (input === ADMIN_PASSWORD) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";

    // Load current values
    document.getElementById("editPrice").value = localStorage.getItem("editPrice") || "₹999";
    document.getElementById("thumbPrice").value = localStorage.getItem("thumbPrice") || "₹399";
    document.getElementById("brandPrice").value = localStorage.getItem("brandPrice") || "₹1499";
  } else {
    alert("Incorrect password");
  }
}

// === Save Prices ===
function savePrices() {
  const editPrice = document.getElementById("editPrice").value;
  const thumbPrice = document.getElementById("thumbPrice").value;
  const brandPrice = document.getElementById("brandPrice").value;

  localStorage.setItem("editPrice", editPrice);
  localStorage.setItem("thumbPrice", thumbPrice);
  localStorage.setItem("brandPrice", brandPrice);

  alert("Prices updated successfully!");
}

// === Add Thumbnail ===
function addThumbnail() {
  const url = document.getElementById("thumbnail-url").value;
  if (!url) return alert("Please enter a URL.");

  let thumbnails = JSON.parse(localStorage.getItem("thumbnails")) || [];
  thumbnails.push(url);
  localStorage.setItem("thumbnails", JSON.stringify(thumbnails));

  alert("Thumbnail added!");
  document.getElementById("thumbnail-url").value = "";
}

// === Load Prices & Thumbnails on Homepage ===
window.onload = function () {
  // Only run on index.html
  if (document.getElementById("edit-price")) {
    document.getElementById("edit-price").innerText = localStorage.getItem("editPrice") || "₹999";
    document.getElementById("thumb-price").innerText = localStorage.getItem("thumbPrice") || "₹399";
    document.getElementById("brand-price").innerText = localStorage.getItem("brandPrice") || "₹1499";

    const thumbnailList = document.getElementById("thumbnail-list");
    let thumbnails = JSON.parse(localStorage.getItem("thumbnails")) || [];

    thumbnails.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      thumbnailList.appendChild(img);
    });
  }
      }
