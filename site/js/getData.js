const dbUrl = 'https://fittshop.herokuapp.com/goods';

const container = document.getElementById('all__assortment');
const hiddenBlock = document.querySelector('.presentation');
const zagolovok = document.getElementById('zagolovok')

const triggers = {
    tab: document.querySelector('#linkOfTab'),
    mat: document.querySelector('#linkOfMat'),
    bed: document.querySelector('#linkOfBed'),
    tum: document.querySelector('#linkOfTum')
}



getDataFromDB((databaseContent) => {
    if (container) displayCards(databaseContent);

    for (const [filter, trigger] of Object.entries(triggers)) {
        if (!trigger) continue;

        trigger.addEventListener('click', event => {
            event.preventDefault()
            switch (filter) {
                case 'tab':
                    zagolovok.innerHTML = 'Табуретки та столи';
                    break;
                case 'mat':
                    zagolovok.innerHTML = 'Матраци';
                    break;
                case 'bed':
                    zagolovok.innerHTML = 'Ліжка';
                    break;
                case 'tum':
                    zagolovok.innerHTML = 'Тумбочки';
                    break;
            }
            const result = []
            for (let good of databaseContent) {
                if (filter == good.type) {
                    // console.log(good);
                    result.push(good);
                }
            }
            // console.log(result);
            hiddenBlock.classList.add('hidden');
            displayCards(result);
        })
    }
});


function getDataFromDB(callbackHandler) {
    // {
    //     id: 1,
    //     photo1: 'img/goods/1.2.png',
    //     title: 'Дубова табуретка',
    //     size: 'XxYxZ',
    //     price: 275,
    //     type: 'tab'
    // }

    // Returns an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) return new XMLHttpRequest();
        // For very old IE browsers (optional)
        else if (window.ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        window.alert("Ajax is not supported!");
        return null;
    }

    const request = getRequestObject();

    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            result = JSON.parse(request.responseText);
            callbackHandler(result); // raise all code
        }
    };
    request.open('GET', dbUrl, true);
    request.send(null); // for POST only
}


function displayCards(cards) {
    // console.log(container);
    container.innerHTML = ''; // clear old cards

    // display new cards
    for (let card of cards) {
        container.appendChild(createCard(card));
    }
}


function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('goods');
    card.innerHTML = `
        <a href="goods.html?id=${data.id}">
            <div data-type="${data.type}"><img src="${data.photo1}" alt="goods"></div>
            <div class="article">
                <a href="goods.html?id=${data.id}">
                    <h3>${data.title}</h3>
                </a>
                <p class="size">Розміри: ${data.size}</p>
                <p class="price">Ціна: ${data.price} грн</p>
            </div>
        </a>
    `;
    // console.log(card);
    return card;
}