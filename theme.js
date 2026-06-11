(() => {
  const storageKey = "site-theme";
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const storedTheme = (() => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  })();

  const setTheme = (theme, persist = false) => {
    const activeTheme = theme === "dark" ? "dark" : "light";
    root.dataset.theme = activeTheme;
    root.classList.toggle("theme-dark", activeTheme === "dark");
    root.classList.toggle("theme-light", activeTheme === "light");
    root.style.colorScheme = activeTheme;

    if (themeColor) {
      themeColor.content = activeTheme === "dark" ? "#10151c" : "#f7f8fa";
    }

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      button.textContent = "";
      button.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
      button.setAttribute("title", `Switch to ${nextTheme} mode`);
      button.setAttribute("aria-pressed", String(activeTheme === "dark"));
    });

    if (persist) {
      try {
        window.localStorage.setItem(storageKey, activeTheme);
      } catch {
        // The selected theme still applies when storage is unavailable.
      }
    }

    window.dispatchEvent(new CustomEvent("site-theme-change", { detail: activeTheme }));
  };

  setTheme(storedTheme);

  document.addEventListener("DOMContentLoaded", () => {
    setTheme(root.dataset.theme);

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
      });
    });
  });
})();
