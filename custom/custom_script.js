document.addEventListener("DOMContentLoaded", function () {
  function expandCalloutFromTarget(target) {
    if (!target) return;

    // Traverse upward until we hit the main `.callout` wrapper
    let calloutContainer = target.closest(".callout");
    if (calloutContainer) {
      // Look for collapsible body directly under callout
      const collapsible = calloutContainer.querySelector(".collapse:not(.show)");
      if (collapsible) {
        collapsible.classList.add("show");
      }
    }

    target.classList.add("search-target-highlight");
    setTimeout(() => target.classList.remove("search-target-highlight"), 4000);
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function handleHashMatch() {
    const hash = decodeURIComponent(window.location.hash);
    if (!hash) return;
    const cleanId = hash.replace(/^#/, "");
    const targetElement = document.getElementById(cleanId);
    if (targetElement) {
      setTimeout(() => expandCalloutFromTarget(targetElement), 200);
    }
  }

  window.addEventListener("hashchange", handleHashMatch);
  handleHashMatch();
});