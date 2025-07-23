document.addEventListener("DOMContentLoaded", function () {
  function expandCalloutAncestors(target) {
    if (!target) return;

    let current = target.parentElement;
    while (current) {
      // Expand collapsed callouts
      if (
        current.classList &&
        current.classList.contains("collapse") &&
        !current.classList.contains("show")
      ) {
        current.classList.add("show");
      }
      current = current.parentElement;
    }

    target.classList.add("search-target-highlight");
    setTimeout(() => target.classList.remove("search-target-highlight"), 4000);
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function handleHashMatch() {
    const hash = decodeURIComponent(window.location.hash);
    if (!hash) return;
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const anchor = document.getElementById(id);
    if (anchor) {
      setTimeout(() => expandCalloutAncestors(anchor), 200);
    }
  }

  window.addEventListener("hashchange", handleHashMatch);
  handleHashMatch();
});