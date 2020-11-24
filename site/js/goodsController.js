const databaseContent = getDataFromDB();

// ((window) => {
const id = findGetParameter('id');
console.log(id);


const current = getById(id);

const photo1 = document.getElementById('goods_photo1'),
    photo2 = document.getElementById('goods_photo2'),
    photo3 = document.getElementById('goods_photo3'),
    photo4 = document.getElementById('goods_photo4'),
    title = document.getElementById('title'),
    size = document.getElementById('size'),
    description = document.getElementById('description');

title.innerText = current.title;
size.innerText = current.size;
description.innerText = current.description;

photo1.src = current.photo1;
photo2.src = current.photo2;

photo3.src = current.photo3;

photo4.src = current.photo4;


// })(window);


function getById(id) {
    for (let item of databaseContent) {
        if (item.id == id)
            return item;
    }
    return {
        title: "Товар не знайдено"
    }
}


function getDataFromDB() {
    return [{
            id: 1,
            photo1: 'img/goods/1.1.png',
            photo2: 'img/goods/1.2.png',
            photo3: 'img/goods/1.3.png',
            photo4: 'img/goods/1.4.png',
            title: 'Дубова табуретка',
            size: 'XxYxZ',
            price: 275,
            type: 'tab',
            description: 'hello world'
        },
        {
            id: 2,
            photo1: 'img/goods/goods.jpg',
            title: 'Слонова тумбочка',
            size: 'XxYxZ',
            price: 265,
            description: 'hello world2',
            type: 'tum'
        },
        {
            id: 3,
            photo1: 'img/goods/goods.jpg',
            title: 'Твікеровий матрац',
            size: 'XxYxZ',
            price: 255,
            type: 'mat',
            description: 'hello world3'

        },
        {
            id: 4,
            photo1: 'img/goods/goods.jpg',
            title: 'Твікеровий матрац',
            size: 'XxYxZ',
            price: 255,
            type: 'mat',
            description: 'hello world4'

        }
    ];
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