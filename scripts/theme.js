function changeTheme() {

    let themeButton = document.getElementById("button-dk-mode")
    let buttonIcon = document.getElementById("button-icon")
    const html = document.querySelector("html")

    themeButton.addEventListener("click", () => {

        html.classList.toggle("dark-mode")
        buttonIcon.classList.toggle("theme-changed")

        const userPreference = localStorage.getItem("darkmode")

        if (!userPreference) {

            localStorage.setItem("darkmode", true)
        } if (userPreference) {

            localStorage.removeItem("darkmode")
        }

        if (buttonIcon.classList.contains("theme-changed")) {

            buttonIcon.src = "../../assets/img/sun.svg"
        } else {

            buttonIcon.src = "../../assets/img/moon.svg"
        }
    })
}

changeTheme()