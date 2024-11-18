const state = {};
const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
    var newActive = event.target;
    var isItem = newActive.closest('.carousel__item');

    if (!isItem || newActive.classList.contains('carousel__item_active')) {
        return;
    }
    ;

    update(newActive);
});

const update = async function (newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove('carousel__item_active');

    [current, prev, next, first, last].forEach(item => {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos)
    });

    console.log(newActive.id)
    let text = "";
    if (newActive.id === "carousel__item__first") {
        text = "Ответим на все рабочие вопросы: от собеседования до причины уволиться"
    } else if (newActive.id === "carousel__item__second") {
        text = "Есть какой-то вопрос, который беспокоит вас днями? Колода даст на него ответ"
    } else if (newActive.id === "carousel__item__third") {
        text = "Базовый раcклад, чтобы узнать, какое место этот день занимает в вашей жизни"
    } else if (newActive.id === "carousel__item__fourth") {
        text = "Пощекочите нервишки с этим любовным раскладом, думая о своем особенном человечке"
    } else {
        text = "Узнайте, на вашей ли стороне судьба в следующие 7 дней и спланируйте неделю заранее"
    }

    if (current.id !== newActive.id) {
        document.getElementById("description").textContent = text
        document.getElementById("description").animate(
            [
                {opacity: 0},
                {opacity: 1}
            ], {
                duration: 1000
            }
        );
    }

};

const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current
    }

    return diff;
}