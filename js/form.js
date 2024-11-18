function retrieveAndAddData(data_elements) {
    let name = ""
    let deck = ""
    let reading = ""
    let reader = ""
    data_elements.forEach((dataSet) => {
        if (dataSet[0] === "name") {
            name = dataSet[1]
        } else if (dataSet[0] === "deck") {
            if (dataSet[1] === "manara") {
                deck = "Манара"
            } else if (dataSet[1] === "lenorman") {
                deck = "Ленорман"
            } else if (dataSet[1] === "waite") {
                deck = "Уейта"
            } else {
                deck = "Святая смерть"
            }
        } else if (dataSet[0] === "reader") {
            if (dataSet[1] === "default") {
                reader = "Рита"
            }
        } else if (dataSet[0] === "reading") {
            if (dataSet[1] === "daily") {
                reading = "Ежедневный расклад"
            } else if (dataSet[1] === "love") {
                reading = "Любовный расклад"
            } else if (dataSet[1] === "weekly") {
                reading = "Еженедельный расклад"
            } else if (dataSet[1] === "work") {
                reading = "Рабочий расклад"
            } else {
                reading = "Ответ на вопрос"
            }
        }
    })

    deck = "Колода " + deck

    const newElementTable = document.createElement("div")
    newElementTable.classList.add("wrapper")
    newElementTable.classList.add("wrapper__form")
    const nameElement = document.createElement("div")
    nameElement.classList.add("nested")
    nameElement.classList.add("text-normal")
    nameElement.classList.add("table__element")
    nameElement.textContent = name
    const deckElement = document.createElement("div")
    deckElement.classList.add("nested")
    deckElement.classList.add("text-normal")
    deckElement.classList.add("table__element")
    deckElement.textContent = deck
    const readerElement = document.createElement("div")
    readerElement.classList.add("nested")
    readerElement.classList.add("text-normal")
    readerElement.classList.add("table__element")
    readerElement.textContent = reader
    const readingElement = document.createElement("div")
    readingElement.classList.add("nested")
    readingElement.classList.add("text-normal")
    readingElement.classList.add("table__element")
    readingElement.textContent = reading

    console.log(Number(window.localStorage.getItem("count_rows")) % 2)
    if (Number(window.localStorage.getItem("count_rows")) % 2 === 0) {
        newElementTable.classList.add("wrapper__even")
    } else {
        newElementTable.classList.add("wrapper__odd")
    }

    newElementTable.appendChild(nameElement)
    newElementTable.appendChild(deckElement)
    newElementTable.appendChild(readerElement)
    newElementTable.appendChild(readingElement)
    const table = document.getElementsByClassName("table")[0]
    table.appendChild(newElementTable)
    window.localStorage.setItem("count_rows", (Number(window.localStorage.getItem("count_rows")) + 1).toString())
}

function handleFormSubmit(event) {
    event.preventDefault()
    let data = new FormData(form)
    let data_elements = Array.from(data.entries())

    retrieveAndAddData(data_elements)
    let answers = JSON.parse(localStorage.getItem("form_answers"))
    let new_answers = []
    answers.forEach(elem => new_answers.push(elem))
    new_answers.push(data_elements)
    window.localStorage.setItem("form_answers", JSON.stringify(new_answers));
}

if (window.localStorage.getItem("count_rows") == null) {
    window.localStorage.setItem("count_rows", "0")
}

if (window.localStorage.getItem("form_answers") == null) {
    window.localStorage.setItem("form_answers", JSON.stringify([]))
} else {
    let answers = JSON.parse(localStorage.getItem("form_answers"))
    window.localStorage.setItem("count_rows", answers.length.toString())
    answers.forEach(answer => retrieveAndAddData(answer))
}


const form = document.getElementById('form_reading')
form.addEventListener('submit', handleFormSubmit)