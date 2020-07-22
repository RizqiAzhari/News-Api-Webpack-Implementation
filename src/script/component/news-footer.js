class NewsFooter extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

   connectedCallback(){
        this.render();
   }
 
   render() {
    this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                display: block;
                padding: 20px;
                color: #ff8000;
                background-color: black;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
            }
        </style>
        <p>&#169; Juli 2020, Banjarbaru, Kalimantan Selatan, 70714</p>
        <p>Jl. A. Yani Gg. Purnama No. 17</p>
        <p>Call Me : 085623982301 (Akhmad Rizqi)</p>`;
   }
}

customElements.define("news-footer", NewsFooter);