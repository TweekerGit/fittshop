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

    const photo1 = document.getElementById('goods_photo1'),
        photo2 = document.getElementById('goods_photo2'),
        photo3 = document.getElementById('goods_photo3'),
        photo4 = document.getElementById('goods_photo4'),
        title = document.getElementById('title'),
        size = document.getElementById('size'),
        description = document.getElementById('description');

    title.innerText = current.title || 'Товар не знайдено';
    size.innerText = current.size || '';
    description.innerText = current.description || 'Ви дурбелик';

    photo1.src = current.photo1;
    photo2.src = current.photo2;
    photo3.src = current.photo3;
    photo4.src = current.photo4;

});


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