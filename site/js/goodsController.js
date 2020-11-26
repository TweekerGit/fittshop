const swiperContainer = document.getElementById('swiper-wrapper');

getDataFromDB((databaseContent) => {

    function getById(id) {
        for (let item of databaseContent) {
            if (item.id == id)
                return item;
        }
        return {}
    }


    const id = findGetParameter('id');
    console.log(id);


    const current = getById(id);

    const title = document.getElementById('title'),
        size = document.getElementById('size'),
        description = document.getElementById('description');

    title.innerText = current.title || 'Товар не знайдено';
    size.innerText = 'Розміри: ' + (current.size || 'Не знайдено');
    description.innerText = current.description || 'Ви дурбелик';
    addSlide(current.photo4);
    addSlide(current.photo3);
    addSlide(current.photo2);
    addSlide(current.photo1);

    var swiper = new Swiper('.swiper-container', {
        // effect: 'flip',
        // loop: false,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

});

function addSlide(source) {
    if (source) {
        swiperContainer.innerHTML = `
    <div class="swiper-slide">
        <div class="swiper-zoom-container">
            <img src="${source}">
        </div>
    </div>
   ` + swiperContainer.innerHTML;
    }
}



function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function(item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}