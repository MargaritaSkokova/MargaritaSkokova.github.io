var elem = document.querySelector('.slider__container');
var flky = new Flickity(elem, {accessibility: true,
    groupCells: true,
    adaptiveHeight: false,
    autoPlay: false,
    cellAlign: 'center',
    cellSelector: undefined,
    contain: false,
    draggable: '>1',
    dragThreshold: 3,
    freeScroll: false,
    friction: 0.2,
    initialIndex: 1,
    lazyLoad: true,
    percentPosition: true,
    prevNextButtons: true,
    pageDots: true,
    resize: true,
    rightToLeft: false,
    setGallerySize: true,
    watchCSS: false,
    wrapAround: false
});

