;(function initTheme() {
  const theme = localStorage.getItem("theme") || "light";

  if (theme === 'dark') {
    const html = document.querySelector('html')

    html.classList.add('dark')
    html.style.colorScheme = 'dark';
  }
})()