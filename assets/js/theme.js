const toggleBtn = document.getElementById('toggle-theme');


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️ Mode clair';
}
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});