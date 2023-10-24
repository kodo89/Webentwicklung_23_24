const toggleColorMode = document.getElementById("switch-color-mode");
const BodyEl = document.getElementsByTagName("body")[0];
var colorMode;

window.addEventListener("load", (event) => {
    console.debug("Loaded");
    localStorage.getItem("colorMode");
    colorMode = localStorage.getItem("colorMode");
    console.debug(colorMode);

    if(colorMode == "dark") {
        toggleColorMode.checked = false;
        BodyEl.setAttribute("data-bs-theme", "dark");
    }
    else {
        toggleColorMode.checked = true;
        BodyEl.setAttribute("data-bs-theme", "light");
    }
})

toggleColorMode.addEventListener("click", function() {
    if(this.checked) {
        console.debug("Set light mode.");
        BodyEl.setAttribute("data-bs-theme", "light");
        localStorage.setItem("colorMode", "light");
    }
    else {
        console.debug("Set dark mode.");
        BodyEl.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("colorMode", "dark");
    }
})