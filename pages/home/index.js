function showCards(list) {

    const userPreference = localStorage.getItem('darkmode')
    const cardsList = document.getElementById("cards-list")
    const html = document.querySelector("html")

    cardsList.innerText = ""

    list.forEach((product) => {

        let itemCard = cardTemplate(product)
        cardsList.appendChild(itemCard)
    })

    if (userPreference) {

        html.classList.add('dark-mode')
    }
}

showCards(products)

function cardTemplate(item) {

    const { title, price, img, band, year, id } = item

    let valueBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
    let itemCard = document.createElement("li")
    let imgContainer = document.createElement("div")
    let albumImg = document.createElement("img")
    let detailsContainer = document.createElement("div")
    let bandAgeContainer = document.createElement("div")
    let bandTitle = document.createElement("p")
    let bandAge = document.createElement("p")
    let albumName = document.createElement("p")
    let valueBuyContainer = document.createElement("div")
    let albumValue = document.createElement("p")
    let buyButton = document.createElement("button")

    itemCard.classList = "product-card"
    imgContainer.classList = "img-container"
    detailsContainer.classList = "flex details-container"
    bandAgeContainer.classList = "flex band-age"
    bandTitle.classList = "band-title"
    bandAge.classList = "album-age"
    albumName.classList = "album-name"
    valueBuyContainer.classList = "flex value-buy"
    albumValue.classList = "album-value"
    buyButton.classList = "buy-button"

    itemCard.id = id

    albumImg.src = img
    albumImg.alt = title

    bandTitle.innerText = band
    bandAge.innerText = year
    albumName.innerText = title
    albumValue.innerText = valueBRL
    buyButton.innerText = "Comprar"

    imgContainer.appendChild(albumImg)
    bandAgeContainer.append(bandTitle, bandAge)
    valueBuyContainer.append(albumValue, buyButton)
    detailsContainer.append(bandAgeContainer, albumName, valueBuyContainer)
    itemCard.append(imgContainer, detailsContainer)

    return itemCard
}

function filterList(list) {

    let genreButtons = document.querySelectorAll(".music-genre")
    let rangeInput = document.getElementById("price-value")

    genreButtons.forEach((itemButton) => {

        itemButton.addEventListener("click", () => {

            let itemCategory = itemButton.innerText

            let listFilter = list.filter((product) => product.category.includes(itemCategory) && Number(rangeInput.value) >= product.price)

            showCards(listFilter)
        })
    })
}

filterList(products)

function showRangeValue() {

    let rangeInput = document.getElementById("price-value")
    let actualValue = document.getElementById("show-result")

    actualValue.innerHTML = `Até R$${rangeInput.value}`

    rangeInput.addEventListener("input", () => actualValue.innerHTML = `Até R$${rangeInput.value}`)
}

showRangeValue()