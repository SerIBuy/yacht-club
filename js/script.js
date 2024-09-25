let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');
let page = document.querySelector('.page');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');
let blogArticles = document.querySelectorAll('.blog-article');
let cards = document.querySelector('.cards');
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let activePhoto = document.querySelector('.active-photo');
let previewList = document.querySelectorAll('.preview-list a');

// Меняем тему на темную
themeButtonDark.onclick = function(){
    page.classList.add('dark');
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
}

// Меняем тему на светлую
themeButtonLight.onclick = function(){
    page.classList.remove('dark');
    themeButtonDark.classList.remove('active');
    themeButtonLight.classList.add('active');
}

// Меняем на шрифт без засечек
fontButtonSansSerif.onclick = function(){
    page.classList.remove('serif');
    fontButtonSansSerif.classList.add('active');
    fontButtonSerif.classList.remove('active');
}

//Меняем на шрифт с засечками
fontButtonSerif.onclick = function(){
    page.classList.add('serif');
    fontButtonSansSerif.classList.remove('active');
    fontButtonSerif.classList.add('active');
}

// Показываем полный текст постов в разделе
for (let blogArticle of blogArticles){
        let moreButton = blogArticle.querySelector('.more');
        moreButton.onclick = function(){
        blogArticle.classList.remove('short');
        }
    }

// Меняем раскладку карточек в "Аренда яхт" на таблицу
cardViewButtonGrid.onclick = function(){
    cards.classList.remove('list');
    cardViewButtonGrid.classList.add('active');
    cardViewButtonList.classList.remove('active');
}

// Меняем раскладку карточек на список
cardViewButtonList.onclick = function(){
    cards.classList.add('list');
    cardViewButtonGrid.classList.remove('active');
    cardViewButtonList.classList.add('active');
}

// Показываем картинки в галлерее
for (let previewListItem of previewList){
    previewListItem.onclick = function(evt){
    evt.preventDefault();
    activePhoto.src = previewListItem.href;
    let currentActive = document.querySelector('.active-item');
    console.log(currentActive);
    currentActive.classList.remove('active-item');
    previewListItem.classList.add('active-item');
    }
}