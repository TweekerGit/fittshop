const container = document.getElementById('all__assortment');
const hiddenBlock = document.querySelector('.presentation');
const zagolovok = document.getElementById('zagolovok')

// get from db
const databaseContent = getDataFromDB();
if (container) displayCards(databaseContent);

const triggers = {
    tab: document.querySelector('#linkOfTab'),
    mat: document.querySelector('#linkOfMat'),
    bed: document.querySelector('#linkOfBed'),
    tum: document.querySelector('#linkOfTum')
}







function getDataFromDB() {
    return [{
            id: 1,
            photo1: 'img/goods/1.2.png',
            title: 'Дубова табуретка',
            size: 'XxYxZ',
            price: 275,
            type: 'tab'
        },
        {
            id: 2,
            photo1: 'img/goods/goods.jpg',
            title: 'Слонова тумбочка',
            size: 'XxYxZ',
            price: 285,
            type: 'tum'
        },
        {
            id: 3,
            photo1: 'img/goods/goods.jpg',
            title: 'Твікеровий матрац',
            size: 'XxYxZ',
            price: 255,
            type: 'mat'
        },
        {
            id: 4,
            photo1: 'img/goods/goods.jpg',
            title: 'Твікеровий матрац',
            size: 'XxYxZ',
            price: 255,
            type: 'mat'
        }
    ];
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

for (const [filter, trigger] of Object.entries(triggers)) {
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