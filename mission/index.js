const themeSelector = document.getElementById("selectMode");
const image = document.createElement("img");
image.alt = "dark theme BYUI logo";
image.classList.add("logo");
document.querySelector("footer").appendChild(image);


function changeTheme() {
    const newSelect = document.getElementById("selectMode");
    const selectValue = newSelect.value

    if (selectValue === 'light') {
        document.body.classList.remove('dark');
        newSelect.classList.remove('dark');
        image.src = 'byui-logo.webp';
    } else if (selectValue === 'dark') {
        document.body.classList.add('dark');
        newSelect.classList.add('dark');
        image.src = "byui-logo_white.png"
    };
};

themeSelector.addEventListener('change', changeTheme);
