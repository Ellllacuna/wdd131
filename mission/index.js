const themeSelector = document.getElementById("selectMode");

function changeTheme() {
    const newSelect = document.getElementById("selectMode");
    const selectValue = newSelect.value

    if (selectValue === 'light') {
        document.body.classList.remove('dark');
        newSelect.classList.remove('dark');
    } else if (selectValue === 'dark') {
        document.body.classList.add('dark');
        newSelect.classList.add('dark');
    };
};

themeSelector.addEventListener('change', changeTheme);
