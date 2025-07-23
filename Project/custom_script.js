<script>
document.addEventListener("DOMContentLoaded", function () {
  function expandParentsToTarget(target) {
    if (!target) return;

    let parent = target.parentElement;

    while (parent) {
      // Check for a collapsible callout
      if (parent.classList.contains("callout") && parent.hasAttribute("data-callout")) {
        // If it's collapsed, simulate a click or expand manually
        const toggleButton = parent.querySelector(".callout-header button, summary");

        if (toggleButton) {
          // Expand if collapsed
          if (toggleButton.getAttribute("aria-expanded") === "false") {
            toggleButton.click();
          }
        } else {
          // If toggle isn't present (e.g., <details>), force open
          if (parent.tagName.toLowerCase() === "details") {
            parent.open = true;
          }
        }
      }

      parent = parent.parentElement;
    }

    // Scroll smoothly to the target
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function checkAndExpandFromHash() {
    const hash = decodeURIComponent(window.location.hash);
    if (!hash) return;

    const targetId = hash.startsWith("#") ? hash.slice(1) : hash;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Delay slightly in case DOM hasn’t finished expanding all panels
      setTimeout(() => expandParentsToTarget(targetElement), 200);
    }
  }

  // Listen for hash change when clicking search results
  window.addEventListener("hashchange", checkAndExpandFromHash);

  // Also trigger once on initial page load (useful if navigating directly to a URL with hash)
  checkAndExpandFromHash();
});
</script>