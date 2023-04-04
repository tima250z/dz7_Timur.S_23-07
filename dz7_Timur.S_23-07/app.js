async function getNews() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

function renderNews(news) {
    const newsContainer = document.getElementById('news-container');
    news.forEach((item) => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');

        const newsImage = document.createElement('img');
        newsImage.src = 'https://img.redbull.com/images/c_crop,x_126,y_0,h_2668,w_3335/c_fill,w_760,h_628/q_auto,f_auto/redbullcom/2023/3/9/f4noan3veittz18kase2/terry-adams-bmx-action-trick';

        const newsTitle = document.createElement('h2');
        newsTitle.textContent = item.title;

        const newsDescription = document.createElement('p');
        newsDescription.textContent = item.body;

        newsCard.appendChild(newsImage);
        newsCard.appendChild(newsTitle);
        newsCard.appendChild(newsDescription);
        newsContainer.appendChild(newsCard);
    });
}

async function init() {
    const news = await getNews();
    renderNews(news);
}

init();