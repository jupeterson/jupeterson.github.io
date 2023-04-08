// When the user clicks on the button, scroll to the top of the document
export function topScrollFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollFunction() {
  const scrollToTopElement = window?.document.getElementById("scrollToTop");
  if (scrollToTopElement) {
    if (
      window.document.body.scrollTop > 110 ||
      window.document.documentElement.scrollTop > 110
    ) {
      scrollToTopElement.style.display = "flex";
    } else {
      scrollToTopElement.style.display = "none";
    }
  }
}
