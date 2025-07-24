document.addEventListener("DOMContentLoaded", function () {
  function expandCalloutViaHeader(target) {
    if (!target) return;

    let current = target.parentElement;
    while (current) {
      if (current.classList.contains("callout-header")) {
        const targetSelector = current.getAttribute("data-bs-target");
        if (targetSelector) {
          const collapsible = document.querySelector(targetSelector);
          if (collapsible && collapsible.classList.contains("collapse") && !collapsible.classList.contains("show")) {
            collapsible.classList.add("show");
          }
        }
        break;
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
      setTimeout(() => expandCalloutViaHeader(anchor), 200);
    }
  }

  window.addEventListener("hashchange", handleHashMatch);
  handleHashMatch();
});