document.addEventListener("DOMContentLoaded", function () {
  function expandCalloutFromSearchTarget(target) {
    if (!target) return;

    // Explicitly fetch the callout container by ID
    const calloutContainer = document.getElementById("call-out-note");
    if (!calloutContainer) return;

    // Locate its header and extract the Bootstrap target
    const header = calloutContainer.querySelector(".callout-header");
    if (header) {
      const selector = header.getAttribute("data-bs-target");
      if (selector) {
        const collapsibleBody = document.querySelector(selector);
        if (
          collapsibleBody &&
          collapsibleBody.classList.contains("collapse") &&
          !collapsibleBody.classList.contains("show")
        ) {
          collapsibleBody.classList.add("show");
        }
      }
    }

    // Highlight the matched search term and scroll to it
    target.classList.add("search-target-highlight");
    setTimeout(() => target.classList.remove("search-target-highlight"), 4000);
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function checkAndExpandHashTarget() {
    const hash = decodeURIComponent(window.location.hash);
    if (!hash) return;

    const cleanId = hash.replace(/^#/, "");
    const anchor = document.getElementById(cleanId);
    if (anchor) {
      setTimeout(() => expandCalloutFromSearchTarget(anchor), 200);
    }
  }

  window.addEventListener("hashchange", checkAndExpandHashTarget);
  checkAndExpandHashTarget();
});