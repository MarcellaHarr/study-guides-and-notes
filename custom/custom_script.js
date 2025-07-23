document.addEventListener("DOMContentLoaded", function () {
  function expandParentsToTarget(target) {
    if (!target) return;

    let parent = target.parentElement;
    while (parent) {
      if (parent.classList.contains("callout") && parent.hasAttribute("data-callout")) {
        const toggleButton = parent.querySelector(".callout-header button, summary");
        if (toggleButton && toggleButton.getAttribute("aria-expanded") === "false") {
          toggleButton.click();
        }
        parent.open = true; // force it open anyway
      }
      parent = parent.parentElement;
    }

    target.classList.add("search-target-highlight");
    setTimeout(() => target.classList.remove("search-target-highlight"), 4000);
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function checkAndExpandFromHash() {
    const hash = decodeURIComponent(window.location.hash);
    if (!hash) return;
    const targetId = hash.startsWith("#") ? hash.slice(1) : hash;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => expandParentsToTarget(targetElement), 200);
    }
  }

  window.addEventListener("hashchange", checkAndExpandFromHash);
  checkAndExpandFromHash();
});
