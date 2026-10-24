// Minimal, dependency-free lightbox for the gallery page.
// Click a gallery image to view it full-size; click anywhere or press Esc to close.
(function () {
  var overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.hidden = true;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-label", "Photo preview");
  overlay.innerHTML =
    '<img alt=""><p class="lightbox-caption"></p>';
  document.body.appendChild(overlay);

  var img = overlay.querySelector("img");
  var caption = overlay.querySelector("p");

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    caption.textContent = alt || "";
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.hidden = true;
    img.src = "";
    caption.textContent = "";
    document.body.style.overflow = "";
  }

  overlay.addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) close();
  });

  document.querySelectorAll("figure.gallery-item img").forEach(function (el) {
    el.addEventListener("click", function () {
      open(el.currentSrc || el.src, el.alt);
    });
  });
})();
