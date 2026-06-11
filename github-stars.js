const publicationLinks = document.querySelectorAll(".link-row--compact .text-link");
const resourceClasses = {
  paper: "resource-link--paper",
  arxiv: "resource-link--arxiv",
  website: "resource-link--website",
  code: "resource-link--code",
  summary: "resource-link--summary",
  video: "resource-link--video",
};

publicationLinks.forEach((link) => {
  const resourceType = link.textContent.trim().toLowerCase();
  const resourceClass = resourceClasses[resourceType];

  if (resourceClass) {
    link.classList.add(resourceClass);
  }

  if (resourceType === "summary") {
    const xIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const xPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    xIcon.classList.add("resource-icon");
    xIcon.setAttribute("viewBox", "0 0 24 24");
    xIcon.setAttribute("aria-hidden", "true");
    xPath.setAttribute(
      "d",
      "M18.9 2h3.7l-8.1 9.2L24 22h-7.4l-5.8-7.6L4.2 22H.5l8.6-9.8L0 2h7.6l5.2 6.9zm-1.3 18.1h2L6.5 3.8H4.4z"
    );
    xIcon.append(xPath);
    link.prepend(xIcon);
  }

  if (!link.href.startsWith("https://github.com/")) {
    return;
  }

  const url = new URL(link.href);
  const [owner, repo] = url.pathname.split("/").filter(Boolean);

  if (!owner || !repo) {
    return;
  }

  link.classList.add("code-link");

  const stars = document.createElement("span");
  stars.className = "github-stars";
  stars.setAttribute("aria-label", "Loading GitHub stars");
  stars.textContent = "…";
  link.append(stars);

  fetch(`https://img.shields.io/github/stars/${owner}/${repo}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Shields.io returned ${response.status}`);
      }

      return response.json();
    })
    .then((badge) => {
      const count = badge.message;

      if (typeof count !== "string" || !count.trim()) {
        return;
      }

      stars.textContent = count;
      stars.setAttribute("aria-label", `${count} GitHub stars`);
    })
    .catch(() => {
      stars.textContent = "—";
      stars.setAttribute("aria-label", "GitHub star count unavailable");
    });
});
