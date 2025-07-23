document.addEventListener("DOMContentLoaded", function () {
  function expandParentsToTarget(target) {
    if (!target) return;

    let parent = target.parentElement;
    while (parent) {
      if (parent.classList && parent.classList.contains("collapse") && !parent.classList.contains("show")) {
        parent.classList.add("show");
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
