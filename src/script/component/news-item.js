class NewsItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

   set news(news) {
        this._news = news;
        this.render();
   }
 
   render() {
    this.shadowDOM.innerHTML = `
        <style>

            :host {
                display: block;
                width: 80%;
                margin: 25px auto;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            
            .photo-news {
                width: 80%;
                height: 80%;
                margin: 50px 0 0 50px;
                object-fit: cover;
                object-position: center;
            }
            
            .news-info {
                padding: 24px;
            }
            
            .news-info > h6 {
                padding: 5px;
            }
            
            .news-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
        </style>
        <img class="photo-news" src="${this._news.urlToImage}" alt="Photo News">
           <div class="news-info">
               <h2><a href = "${this._news.url}">${this._news.title}</a></h2>
               <h6>Penulis : ${this._news.author}</h6>
               <hr>
               <p>${this._news.content}</p>
           </div>`;
   }
}

customElements.define("news-item", NewsItem);