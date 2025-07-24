document.addEventListener("DOMContentLoaded", function () {
  function expandCalloutFromSearchTarget(target) {
    if (!target) return;

    // Check if the target is inside a callout-note container
    const calloutContainer = target.closest(".callout-note");
    if (calloutContainer) {
      // Locate its header and extract the Bootstrap target
      const header = calloutContainer.querySelector(".callout-header");
      if (header) {
        const selector = header.getAttribute("data-bs-target");
        if (selector) {
          const collapsibleBody = document.querySelector(selector);
          if (collapsibleBody && collapsibleBody.classList.contains("collapse")) {
            // Always collapse first
            collapsibleBody.classList.remove("show");
            // Then expand
            setTimeout(() => collapsibleBody.classList.add("show"), 10);
          }
        }
      }
    }

    // Highlight the matched search term and scroll to it
    target.classList.add("search-target-highlight");
    setTimeout(() => target.classList.remove("search-target-highlight"), 4000);
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function checkAndExpandHashTarget() {
    let hash = "";
    try {
      hash = decodeURIComponent(window.location.hash);
    } catch (e) {
      // If the hash is malformed, skip processing
      return;
    }
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