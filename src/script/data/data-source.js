
class DataSource {

    static searchNews(keyword) {
        return fetch(`http://newsapi.org/v2/everything?language=id&apiKey=5587699672fe4fba87477f22cf07b28c&qInTitle=${keyword}`)
       .then(response => response.json())
       .then(responseJson => {
           if(responseJson.articles.length > 0) {
               return Promise.resolve(responseJson.articles);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
    }
}

export default DataSource;