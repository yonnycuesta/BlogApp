/*
1. Tema sin seleccionar => dark-mode
2. Su distintivo este configurado en dark mode, y el usuario no haya cambiado eso => dark mode
3. Su distintivo: dark mode, y el usuario haya cambiado eso => light mode
4. Su distintivo: light mode, y el usuario no haya cambiado eso => light mode
5. Su distintivo: light mode, y el usuario haya cambiado eso => dark mode
*/

const colorSchemeKey = "color-scheme";
readColorSchemeFromLocalStorage();

let checkBoxElement = document.querySelector(".dark-toggle");

checkBoxElement.checked = isUsingDarkMode();
// Evento que se ejecuta cuando el usuario cambia el estado del checkbox
checkBoxElement.addEventListener("change", function () {
    if (this.checked) {
        /** Cambiar a dark mode */
        changeToDarkMode();
    } else {
        /** Cambiar a light mode */
        changeToLightMode();
    }
});
// Leer el color que me devuleve el localStorage
function readColorSchemeFromLocalStorage() {
    let colorScheme = getColorSchemeFromLocalStorage();
    if (!colorScheme) return;
    if (colorScheme === "light") {
        changeToLightMode();
    } else {
        changeToDarkMode();
    }
}

function changeToLightMode() {
    let bodyElement = document.querySelector("body");
    bodyElement.classList.remove("force-dark");
    bodyElement.classList.add("force-light");
    setColorSchemeToLocalStorage("light");
}

function changeToDarkMode() {
    let bodyElement = document.querySelector("body");
    bodyElement.classList.remove("force-light");
    bodyElement.classList.add("force-dark");
    setColorSchemeToLocalStorage("dark");
}
/**
 * It sets the color scheme to local storage
 * @param value - The value of the color scheme to be saved in the localStorage.
 */
function setColorSchemeToLocalStorage(value) {
    try {
        window.localStorage.setItem(colorSchemeKey, value);
    } catch {
        console.log("Error al guardar el tema en el localStorage");
    }
}

/**
 *If the color scheme is in local storage, return it, otherwise return null.
 *@returns The color scheme from local storage.
 */
function getColorSchemeFromLocalStorage() {
    try {
        return window.localStorage.getItem(colorSchemeKey);
    } catch {
        console.log("Error al obtener el tema del localStorage");
    }
}

// Saber si el usuario esta en dark mode

function isUsingDarkMode() {
    let bodyElement = document.querySelector("body");
    let bodyStyle = getComputedStyle(bodyElement);
    let bodyBackgroundColor = rgbToHex(bodyStyle.backgroundColor);
    let darkModeBgColor = "#0D1B1E";

    return darkModeBgColor === bodyBackgroundColor;
}

// Funcion para cambiar de rgb a hex
function rgbToHex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase();
}