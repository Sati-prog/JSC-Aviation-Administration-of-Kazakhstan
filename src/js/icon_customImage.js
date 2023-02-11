ymaps.ready(function () {

    var myMap = new ymaps.Map('map', {

        center: [42.90, 68.81],
        zoom: 9,
        controls: [],
        behaviors: ['drag'],
        // controls: ['zoomControl']
    });
        
    var placeMarkSym =  new ymaps.Placemark([42.33, 69.58], {

        hintContent: '«Shymkent International Airport» LLP',
        balloonContent: '«Shymkent International Airport» LLP'
    }, {

        iconLayout: 'default#image',
        iconImageHref: 'icons/map/airplane.png',
        iconImageSize: [25, 25],
        iconImageOffset: [-13, 0],

        overlayFactory: 'default#interactiveGraphics'
    });

    var placeMarkTurk =  new ymaps.Placemark([43.31, 68.26], {

        hintContent: '«Turkistan International Airport» LLP',
        balloonContent: '«Turkistan International Airport» LLP'
    }, {

        iconLayout: 'default#image',
        iconImageHref: 'icons/map/airplane.png',
        iconImageSize: [25, 25],
        iconImageOffset: [-13, 0],

        overlayFactory: 'default#interactiveGraphics'
    });

    // var placeMarkWay =  new ymaps.Placemark([42.86, 69.24], {

    //     hintContent: '',
    //     balloonContent: ''
    // }, {

    //     iconLayout: 'default#image',
    //     iconImageHref: 'icons/map/way.png',
    //     iconImageSize: [352, 461],
    //     iconImageOffset: [-350, -220]
    // });

    // myMap.geoObjects
    //     .add(placeMarkSym)
    //     .add(placeMarkTurk)
    //     .add(placeMarkWay);

    // https://ru.stackoverflow.com/questions/1385668/%d0%9b%d0%b8%d0%bd%d0%b8%d1%8f-%d0%bf%d0%be%d0%bb%d1%83%d0%ba%d1%80%d1%83%d0%b3-%d0%bd%d0%b0-%d1%8f%d0%bd%d0%b4%d0%b5%d0%ba%d1%81-%d0%ba%d0%b0%d1%80%d1%82%d0%b0%d1%85

    myMap.geoObjects
        .add(placeMarkSym)
        .add(placeMarkTurk);
});