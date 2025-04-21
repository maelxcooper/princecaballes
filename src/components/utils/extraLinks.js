export const handleExternalLinks = () => {
  const allLinks = Array.from(document.querySelectorAll("a"));
  allLinks.forEach((link) => {
    if (link.host !== window.location.host) {
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("target", "_blank");
    }
  });
};
