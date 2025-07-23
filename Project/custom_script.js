<script>
document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  // Traverse upward through all parent elements
  let current = target;
  while (current) {
    if (
      current.classList &&
      current.classList.contains("callout-collapsed")
    ) {
      current.classList.remove("callout-collapsed");
    }
    current = current.parentElement;
  }

  // Optional: log when done
  console.log("Callout expansion logic applied for:", hash);
});
</script>