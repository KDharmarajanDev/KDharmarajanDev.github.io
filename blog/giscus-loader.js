(() => {
  const container = document.querySelector("[data-giscus-container]");
  if (!container) return;

  const config = {
    repo: "KDharmarajanDev/KDharmarajanDev.github.io",
    repoId: "MDEwOlJlcG9zaXRvcnkyOTUyMzgzMjc=",
    category: "Announcements",
    categoryId: "DIC_kwDOEZj6t84C-zaU",
  };
  const themeUrl = new URL("/blog/giscus-theme.css", window.location.origin).href;

  const showMessage = (html) => {
    container.innerHTML = `<p class="comments-placeholder">${html}</p>`;
  };

  if (window.location.protocol === "file:") {
    showMessage("Comments load when this page is served over HTTP. Run <code>python3 -m http.server</code> to preview the site.");
    return;
  }

  if (config.repoId.startsWith("REPLACE_") || config.categoryId.startsWith("REPLACE_")) {
    showMessage('Giscus is ready to connect. Follow <a href="/blog/README.md">the one-time setup instructions</a> to enable comments.');
    return;
  }

  const script = document.createElement("script");
  Object.entries({
    src: "https://giscus.app/client.js",
    "data-repo": config.repo,
    "data-repo-id": config.repoId,
    "data-category": config.category,
    "data-category-id": config.categoryId,
    "data-mapping": "pathname",
    "data-strict": "1",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "top",
    "data-theme": themeUrl,
    "data-lang": "en",
    crossorigin: "anonymous",
    async: "",
  }).forEach(([key, value]) => script.setAttribute(key, value));
  container.appendChild(script);
})();
