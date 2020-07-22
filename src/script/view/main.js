import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/news-list.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    
    const newsListElement = document.querySelector("news-list");

    const onButtonSearchClicked = () => {
        DataSource.searchNews(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        newsListElement.news = results;
    };

    const fallbackResult = message => {
        newsListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;