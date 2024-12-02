async function loadData() {
    let response;
    response = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 10) + 1}`);

    if (!response.ok) {
        throw new Error("Что-то пошло не так :(");
    }

    return await response.json();
}

window.addEventListener('load', async function () {
    let result
    try {
        result = await loadData()
    } catch (error) {
        document.getElementsByClassName("container__profile__information__nickname")[0].textContent = error.message
        document.getElementsByClassName("container__profile__information__email")[0].style.display = 'none'
        const elements = document.getElementsByClassName("container__information__element")

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none'
        }

        const loading = document.getElementsByClassName('loading')[0];
        loading.style.display = 'none';
    }

    document.getElementsByClassName("container__profile__information__nickname")[0].textContent = result.username
    document.getElementsByClassName("container__profile__information__email")[0].textContent = result.email
    document.getElementsByClassName("container__information__element__inner__name")[0].textContent = result.name
    document.getElementsByClassName("container__information__element__inner__phone")[0].textContent = result.phone
    document.getElementsByClassName("container__information__element__inner__address")[0].textContent = result.address.city
    document.getElementsByClassName("container__information__element__inner__company")[0].textContent = result.company.name
    document.getElementsByClassName("container__information__element__inner__site")[0].textContent = result.website

    const loading = document.getElementsByClassName('loading')[0];
    loading.style.display = 'none';
});
