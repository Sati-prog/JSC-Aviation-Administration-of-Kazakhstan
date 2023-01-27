ymaps.ready(function () {

    var myMap = new ymaps.Map('map', {

            center: [42.836802, 69.275497],
            zoom: 9
        }, {

            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(

            `<div style="color: #FFFFFF; font-weight: bold;">
                $[properties.iconContent]
            </div>`
        ),

        myPlacemarkWithArrow = new ymaps.Placemark(myMap.getCenter(), {

            hintContent: '',
            balloonContent: ''
        }, {

            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'icons/map/way.png',
            // Размеры метки.
            iconImageSize: [452, 511],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-350, -240]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([42.315514, 69.586916], {

            hintContent: '«Shymkent International Airport» LLP',
            balloonContent: '«Shymkent International Airport» LLP',
            iconContent: ''
        }, {

            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'icons/map/airplane.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -10],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        }),

        myPlacemark = new ymaps.Placemark([43.312932, 68.266014], {

            hintContent: '«Turkistan International Airport» LLP',
            balloonContent: '«Turkistan International Airport» LLP',
            iconContent: ''
        }, {

            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'icons/map/airplane.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [3, -5],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithArrow);
});