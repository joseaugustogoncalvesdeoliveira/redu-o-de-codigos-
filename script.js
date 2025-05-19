
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.checked = true; 
} else {
    body.classList.add('light-mode');
    toggleButton.checked = false; 
}

toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark'); 
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light'); 
    }
});
