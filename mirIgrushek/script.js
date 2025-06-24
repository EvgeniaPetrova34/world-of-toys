document.addEventListener('DOMContentLoaded', function() {
    // Слайдер
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    
    function showSlide(n) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }
    
    let slideInterval = setInterval(nextSlide, 5000);
    
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    // Анимация при прокрутке
    const animatedElements = document.querySelectorAll('[data-animate]');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight * 0.75) && // Элемент появляется, когда до него 25% высоты экрана
            rect.bottom >= 0
        );
    }

    function handleScrollAnimation() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate-visible');
            }
        });
    }

    // Задержка для корректной работы при загрузке
    setTimeout(() => {
        handleScrollAnimation();
    }, 300);

    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);
});
// Данные продуктов
const products = [
    {
        id: 1,
        image: "https://play-lh.googleusercontent.com/h5dMcO-S-6cj18JTwOU26GghLEIodDFz7g6gXbJHhB4MWrgSZFi7zc6OheVrz6icMg=w1052-h592",
        category: "Мягкие игрушки",
        title: "Медвежонок Тедди",
        price: 1299,
        age: 0
    },
    {
        id: 2,
        image: "https://cdn1.ozone.ru/multimedia/1026314376.jpg",
        category: "Развивающие",
        title: "Деревянный конструктор",
        price: 2499,
        age: 3
    },
    {
        id: 3,
        image: "https://avatars.mds.yandex.net/get-mpic/11549745/2a00000192f8baf6c41cf95012b5a61e7b34/orig",
        category: "Машинки",
        title: "Грузовик",
        price: 1799,
        age: 1
    },
    {
        id: 4,
        image: "https://avatars.mds.yandex.net/i?id=53218ce2d64fb8cc4f0be561616f52aa_l-5672616-images-thumbs&n=13",
        category: "Ролевые игры",
        title: "Набор доктора",
        price: 3499,
        age: 4
    },
    {
        id: 5,
        image: "https://www.keng.ru/upload/iblock/a8d/jt67016ts2yqkeav6q86xdejglzdsix8.jpg",
        category: "Мягкие игрушки",
        title: "Зайчик Белла",
        price: 899,
        age: 0
    },
    {
        id: 6,
        image: "https://avatars.mds.yandex.net/get-mpic/11620615/2a0000018cab065ea3691ffdd7e424748956/orig",
        category: "Машинки",
        title: "Грузовик-трансформер",
        price: 4599,
        age: 3
    },
    {
        id: 7,
        image: "https://avatars.mds.yandex.net/i?id=a969a4442374550ba158078965a61ddf_l-12164955-images-thumbs&n=13",
        category: "Развивающие",
        title: "Пазл Животные",
        price: 350,
        age: 2
    },
    {
        id: 8,
        image: "https://sc04.alicdn.com/kf/Hbb9831e41ec645b2bb224fb32c508268k/BSCI-Fashion-Blond-Hair-Plush-Doll-with-Pink-Dress-Stuffed-Rag-Doll.jpg",
        category: "Куклы",
        title: "Кукла Алина",
        price: 3299,
        age: 3
    },
    {
        id: 9,
        image: "https://avatars.mds.yandex.net/i?id=f149d183dc9923570dda903553cb154a_l-4055686-images-thumbs&n=13",
        category: "Развивающие",
        title: "Набор для рисования",
        price: 1499,
        age: 4
    },
    {
        id: 10,
        image: "https://s.alicdn.com/@sc04/kf/HTB1wuLvNmzqK1RjSZPxq6A4tVXaZ.jpg_720x720q50.jpg",
        category: "Мягкие игрушки",
        title: "Собачка Бобик",
        price: 1599,
        age: 0
    },
    {
        id: 11,
        image: "https://cdn1.ozone.ru/s3/multimedia-y/6248124670.jpg",
        category: "Ролевые игры",
        title: "Набор повара",
        price: 2899,
        age: 3
    },
    {
        id: 12,
        image: "https://cdn1.ozone.ru/s3/multimedia-4/c600/6303321604.jpg",
        category: "Машинки",
        title: "Спортивная машинка",
        price: 2199,
        age: 2
    }
];

const productsContainer = document.getElementById('products-container');
const paginationContainer = document.getElementById('pagination-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const sortSelect = document.getElementById('sort-select');
const itemsPerPageSelect = document.getElementById('items-per-page');

let currentPage = 1;
let itemsPerPage = 8;
let currentSearchTerm = '';
let currentSortOption = 'default';

function init() {
    renderProducts();
    renderPagination();
    
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    sortSelect.addEventListener('change', () => {
        currentSortOption = sortSelect.value;
        currentPage = 1;
        renderProducts();
        renderPagination();
    });
    
    itemsPerPageSelect.addEventListener('change', () => {
        itemsPerPage = parseInt(itemsPerPageSelect.value);
        currentPage = 1;
        renderProducts();
        renderPagination();
    });
}

// Поиск
function handleSearch() {
    currentSearchTerm = searchInput.value.trim().toLowerCase();
    currentPage = 1;
    renderProducts();
    renderPagination();
}

// Фильтрация продуктов
function filterProducts() {
    if (!currentSearchTerm) return [...products];
    
    return products.filter(product => 
        product.title.toLowerCase().includes(currentSearchTerm) || 
        product.category.toLowerCase().includes(currentSearchTerm)
    );
}

// Сортировка продуктов
function sortProducts(filteredProducts) {
    switch(currentSortOption) {
        case 'name-asc':
            return [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title));
        case 'name-desc':
            return [...filteredProducts].sort((a, b) => b.title.localeCompare(a.title));
        case 'price-asc':
            return [...filteredProducts].sort((a, b) => a.price - b.price);
        case 'price-desc':
            return [...filteredProducts].sort((a, b) => b.price - a.price);
        case 'age-asc':
            return [...filteredProducts].sort((a, b) => a.age - b.age);
        case 'age-desc':
            return [...filteredProducts].sort((a, b) => b.age - a.age);
        default:
            return filteredProducts;
    }
}

// Получение продуктов для текущей страницы
function getPaginatedProducts() {
    const filtered = filterProducts();
    const sorted = sortProducts(filtered);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return {
        products: sorted.slice(startIndex, endIndex),
        total: sorted.length
    };
}

// Рендеринг продуктов
function renderProducts() {
    const { products: productsToRender, total } = getPaginatedProducts();
    
    if (productsToRender.length === 0 && total === 0) {
        productsContainer.innerHTML = `
            <div class="no-results">
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить поисковый запрос</p>
            </div>
        `;
        return;
    }
    
    productsContainer.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${formatPrice(product.price)} ₽</div>
                <div class="product-age">Возраст: ${product.age}+ лет</div>
                <button class="add-to-cart">В корзину</button>
            </div>
        </div>
    `).join('');
}

// Форматирование цены
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Рендеринг пагинации
function renderPagination() {
    const { total } = getPaginatedProducts();
    const totalPages = Math.ceil(total / itemsPerPage);
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Кнопка "Назад"
    if (currentPage > 1) {
        paginationHTML += `<a href="#" class="page-link" data-page="${currentPage - 1}">←</a>`;
    }
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<a href="#" class="active" data-page="${i}">${i}</a>`;
        } else {
            paginationHTML += `<a href="#" class="page-link" data-page="${i}">${i}</a>`;
        }
    }
    
    if (currentPage < totalPages) {
        paginationHTML += `<a href="#" class="page-link" data-page="${currentPage + 1}">→</a>`;
    }
    
    paginationContainer.innerHTML = paginationHTML;
    
    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = parseInt(link.dataset.page);
            renderProducts();
            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}
