export function setupDarkMode() {
    const toggleButton = document.getElementById('toggleDarkMode');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDarkMode = document.body.classList.contains("dark")
        localStorage.setItem('theme', isDarkMode ? 'darkmode' : 'lightmode');
    });

    document.addEventListener("DOMContentLoaded", () => {
        if (localStorage.theme == 'darkmode') {
            document.body.classList.toggle('dark');
        }
    });
}