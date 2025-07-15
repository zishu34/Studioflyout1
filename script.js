const password = "flyout@123";

if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname.includes("vercel")) {
  window.onload = () => {
    document.getElementById("price1").innerText = localStorage.getItem("price1") || "₹999";
    document.getElementById("price2").innerText = localStorage.getItem("price2") || "₹399";
    document.getElementById("price3").innerText = localStorage.getItem("price3") || "₹1499";

    const thumb = localStorage.getItem("thumbImage");
    if (thumb) document.getElementById("thumbImage").src = thumb;

    const video = localStorage.getItem("shortVideo");
    if (video) document.getElementById("shortVideo").src = video;
  };
}

function checkLogin() {
  const pass = document.getElementById("adminPass").value;
  if (pass === password) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");

    document.getElementById("p1").value = localStorage.getItem("price1") || "";
    document.getElementById("p2").value = localStorage.getItem("price2") || "";
    document.getElementById("p3").value = localStorage.getItem("price3") || "";

    document.getElementById("thumbPreview").src = localStorage.getItem("thumbImage");
    document.getElementById("videoPreview").src = localStorage.getItem("shortVideo");
  } else {
    alert("Wrong password!");
  }
}

function uploadImage(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("thumbImage", reader.result);
    document.getElementById("thumbPreview").src = reader.result;
  };
  reader.readAsDataURL(file);
}

function uploadVideo(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("shortVideo", reader.result);
    document.getElementById("videoPreview").src = reader.result;
  };
  reader.readAsDataURL(file);
}

function saveAll() {
  localStorage.setItem("price1", document.getElementById("p1").value);
  localStorage.setItem("price2", document.getElementById("p2").value);
  localStorage.setItem("price3", document.getElementById("p3").value);
  alert("✅ All changes saved! Go back to homepage to see the updates.");
}
