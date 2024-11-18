(function () {
    window.addEventListener('load', () => {
        const pageEnd = performance.mark('pageEnd')
        const loadTime = pageEnd.startTime / 1000

        document.getElementById("footer-time").textContent = `Page loaded in ${loadTime}s.`
    })
})();


window.onload = function () {
    let navigation
    if (document.location.href.includes("index")) {
        navigation = document.getElementById("navigation__button__home")
        console.log(navigation)
    } else if (document.location.href.includes("meaning")) {
        navigation = document.getElementById("navigation__button__meaning")
        console.log(navigation)
    } else if (document.location.href.includes("reading")) {
        navigation = document.getElementById("navigation__button__reading")
        console.log(navigation)
    } else if (document.location.href.includes("profile")) {
        navigation = document.getElementById("navigation__button__profile")
        console.log(navigation)
    }

    navigation.style.color = '#64647e'
    navigation.style.textShadow = '0 0 7px #6c7cba'
}
